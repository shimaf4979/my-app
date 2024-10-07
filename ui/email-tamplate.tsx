interface EmailTemplateProps {
  username: string;
  email: string;
  content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
  email,
  content,
}) => {
  return (
    <div>
      <h1>お問い合わせありがとうございます</h1>
      <p>お問い合わせ内容は以下の通りです</p>
      <p>お名前: {username}</p>
      <p>メールアドレス: {email}</p>
      <p>お問い合わせ内容: {content}</p>
    </div>
  );
};
