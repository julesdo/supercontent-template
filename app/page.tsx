'use client';

import { SetStateAction, useEffect, useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { redirect, useRouter } from 'next/navigation';
import Button from '@/components/ui/button';



export default function HomePage() {

    const [storeId, setStoreId] = useState('');
    const router = useRouter();

    const handleStoreId = (e: { target: { value: SetStateAction<string>; }; }) => {
        setStoreId(e.target.value);
    }

    const handleStoreIdSubmit = () => {
        router.push(`/${storeId}`);
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                        <DialogDescription>
                            <Input onChange={handleStoreId} placeholder="Enter your storeId" />
                            <Button onClick={handleStoreIdSubmit}>Submit</Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>

    )

}