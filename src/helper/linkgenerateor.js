
export const whatsappLink = (message) => {
    const messageToSend = encodeURIComponent(message || "");
    const url = `https://wa.me/?text=${messageToSend}`
    window.open(url, "_blank");
}
export const whatsappText = (phone) => {
    const whatsapp = phone?.startsWith("+") ? phone : `+88${phone}`
    const url = `https://wa.me/${whatsapp}`
    window.open(url, "_blank");
}
export const sendWhatsappMessage = (phone, message) => {
    const messageToSend = encodeURIComponent(`
    Hi...${message.name} আপনার স্টুডেন্ট আইডি:${message.userId} আমি কনসালটেন্ট মিটিং এর জন্য আপনার আবেদনপত্র পেয়েছি। আমি আপনাকে ফ্রিতে বিস্তারিত জানিয়ে দিবো।এবং আরো কাজের বিষয়ে জানার জন্য আপনাকে একটা কনসালটেন্ট মিটিং এ জইন করতে হবে। আমি আপনার কনসালটেন্ট From Dynamic Skillbase E-Learning Platform
    `);
    const url = `https://wa.me/${phone}?text=${messageToSend} `
    window.open(url, "_blank");
}