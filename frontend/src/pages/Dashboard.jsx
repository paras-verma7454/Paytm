import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
    const [balance, setBalance] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                const formattedBalance = response.data.balance.toFixed(2);
                setBalance(formattedBalance);
            } catch (error) {
                console.error("Error fetching balance:", error);
                // Handle error, e.g., redirect to login if unauthorized
                if (error.response && error.response.status === 403) {
                    navigate('/login');
                }
            }
        };

        fetchBalance();
    }, [navigate]);

    return (
        <div>
            <Appbar />
            <div className="m-8">
                <Balance value={balance ? `${balance}` : "Loading..."} />
                <Users />
            </div>
        </div>
    );
};
