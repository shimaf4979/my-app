import MailForm from "@/components/MailForm/MailForm";

export default function Home() {
  return (
    <main className='flex flex-col items-center min-h-screen gap-8 p-24'>
      <h2 className='text-2xl font-semibold mb-4'>
        テキストを入力してください
      </h2>
      <MailForm />
    </main>
  );
}
