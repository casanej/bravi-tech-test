import React, { useEffect, useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme, PalletModel, defaultPallet } from 'assets';
import { AppPages } from './pages';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useToast } from './hooks/useToast';

const App = () => {
    const toast = useToast();
    const queryClient = new QueryClient();
    const [currentPallet, setCurrentTheme] = useState<PalletModel>(theme.pallet[0]);
    const [pallet, setPallet] = useState<PalletModel[]>(theme.pallet);

    useEffect(() => {
        const localPallet = localStorage.getItem('pallet');
        const selectedPallet = localStorage.getItem('selected-pallet');

        if (localPallet) {
            const pallets = JSON.parse(localPallet) as PalletModel[];
            setPallet(pallets);

            if (selectedPallet) {
                const pallet = pallets.find(p => p.id === parseInt(selectedPallet));

                if (pallet) setCurrentTheme(pallet);
            }

        }
    }, [])

    useEffect(() => {
        localStorage.setItem('pallet', JSON.stringify(pallet));
    }, [pallet])

    const changePallet = (palletIndex: number) => {
        const palletSelected = pallet[palletIndex] || defaultPallet;
        setCurrentTheme(palletSelected);

        localStorage.setItem('selected-pallet', palletSelected.id.toString());

        toast('success', `Pallet selected: ${palletSelected.name}`);
    }

    const addPallet = (newPallet: PalletModel) => {
        setPallet(oldPallet => [...oldPallet, {
            ...newPallet,
            id: pallet.length
        }]);

        toast('success', `Pallet ${newPallet.name} added!`);
    }

    const editPallet = (updatedPallet: PalletModel) => {
        const palletIndex = theme.pallet.findIndex(pallet => pallet.id === updatedPallet.id)
        theme.pallet[palletIndex] = updatedPallet

        toast('success', `Pallet ${updatedPallet.name} updated!`);
    }

    const deletePallet = (deletedPallet: PalletModel) => {
        const newPallet = pallet.filter(pallet => pallet.id !== deletedPallet.id);
        setPallet(newPallet);
        setCurrentTheme(newPallet[0] || defaultPallet);

        toast('success', `Pallet ${deletePallet.name} deleted!`);
    }

    const themeProviderObj = { ...theme, pallet, currentPallet, addPallet, editPallet, changePallet, deletePallet };

    return (
        <ThemeProvider theme={themeProviderObj}>
            <GlobalStyle theme={themeProviderObj} />
            <ToastContainer />
            <QueryClientProvider client={queryClient}>
                <ToastContainer />
                <AppPages />
            </QueryClientProvider>
        </ThemeProvider>
    )
};

export default App;