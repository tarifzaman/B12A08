import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Context তৈরি করা হলো
const InstallContext = createContext();

// 2. Local Storage Key
const LOCAL_STORAGE_KEY = 'installedApps';

// 3. Context Provider Component
export const InstallProvider = ({ children }) => {
    // ইনস্টল করা অ্যাপগুলির ID তালিকা
    const [installedAppIds, setInstalledAppIds] = useState(() => {
        // Local Storage থেকে ডেটা লোড করা
        const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
        return storedIds ? JSON.parse(storedIds) : [];
    });
    
    // সর্টিং স্টেট: 'downloads_desc' বা 'downloads_asc'
    const [sortOrder, setSortOrder] = useState('downloads_desc');

    // Effect: যখনই installedAppIds পরিবর্তন হবে, Local Storage আপডেট হবে
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(installedAppIds));
    }, [installedAppIds]);


    // Function 1: অ্যাপ ইনস্টল করার ফাংশন
    const installApp = (appId) => {
        if (!installedAppIds.includes(appId)) {
            setInstalledAppIds((prevIds) => [...prevIds, appId]);
            // এখানে Success Toast দেখানোর লজিক পরে যোগ করা হবে
            console.log(`App ID ${appId} installed successfully.`);
        }
    };

    // Function 2: অ্যাপ আনইনস্টল করার ফাংশন
    const uninstallApp = (appId) => {
        setInstalledAppIds((prevIds) => prevIds.filter((id) => id !== appId));
        // এখানে Uninstall Toast দেখানোর লজিক পরে যোগ করা হবে
        console.log(`App ID ${appId} uninstalled.`);
    };

    // Function 3: অ্যাপ ইনস্টল করা আছে কিনা চেক করার ফাংশন
    const isInstalled = (appId) => {
        return installedAppIds.includes(appId);
    };

    // Function 4: সর্টিং অর্ডার পরিবর্তন করার ফাংশন
    const setSort = (order) => {
        setSortOrder(order);
    };

    const contextValue = {
        installedAppIds,
        installApp,
        uninstallApp,
        isInstalled,
        sortOrder,
        setSort,
    };

    return (
        <InstallContext.Provider value={contextValue}>
            {children}
        </InstallContext.Provider>
    );
};

// 4. Custom Hook for easy use
export const useInstallContext = () => {
    return useContext(InstallContext);
};