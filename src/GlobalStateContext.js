// GlobalStateContext.js
import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import configs from './configs/api_config';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
    const userId = "656d91bf16b20c3edb9660a9";
    const [globalVariable, setGlobalVariable] = useState({
        name: '',
        avatar: '',
        balance: 0
    });

    useEffect(() => {
        if (globalVariable.name === '') {
            console.log(configs.baseAPI + configs.getUserAPI + userId);
            fetch(configs.baseAPI + configs.getUserAPI + userId)
                .then(response => response.json())
                .then(data => {
                    const user_data = {
                        name: data.data.name,
                        avatar: data.data.avatar,
                        balance: data.data.balance
                    };
                    setGlobalVariable(user_data);
                })
                .catch(error => console.error('Error fetching documents:', error));
        }
        else {
            fetch(configs.baseAPI + configs.updateUserAPI + userId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(globalVariable),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Cập nhật user: ', data);
                })
                .catch(error => console.error('Error updating user:', error));
        }
    }, [globalVariable]);

    return (
        <GlobalStateContext.Provider value={{ globalVariable, setGlobalVariable }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => {
    return useContext(GlobalStateContext);
};