import axios from 'axios';

export default async function handler(req, res) {
  const tgBotToken = '7081587984:AAFr_1hQcqvk_7kRNWxqAaX0mMfb66bKHqg';
  const chatId = '-4275599909';

  const { name, phone, complaints } = req.body;

  const text = `Имя: ${name}\nНомер: ${phone}\nЖалоба: ${complaints}\n`;

  const messageParams = {
    chat_id: chatId,
    text,
  };

  try {
    await axios.get(`https://api.telegram.org/bot${tgBotToken}/sendMessage`, { params: messageParams });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}