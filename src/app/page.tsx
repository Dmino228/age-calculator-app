import Link from 'next/link';
import Form from './components/form';
import Result from './components/result';

export default function App() {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen bg-off-white">
            <main className="h-[650px] w-[900px] bg-white p-16 rounded-3xl rounded-br-[25%]">
                <Form />
                <Result />
            </main>
            <div className="attribution">
                Challenge by <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</Link>.
                Coded by <Link href="#">Dmino</Link>.
            </div>
        </div>
    )
}