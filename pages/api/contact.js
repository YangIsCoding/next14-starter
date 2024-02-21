import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // 從請求體中提取資料
    const { name, email, phoneNumber, message } = req.body;

    try {
      // 使用 Prisma 客戶端將資料儲存到資料庫
      const contact = await prisma.contact.create({
        data: {
          name,
          email,
          phoneNumber,
          message,
        },
      });

      // 回傳成功響應
      res.status(200).json({ message: 'Contact saved successfully', contact });
    } catch (error) {
      // 處理可能的錯誤
      res.status(500).json({ error: "Unable to save contact information" });
    }
  } else {
    // 如果不是 POST 請求，回傳 405 Method Not Allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
