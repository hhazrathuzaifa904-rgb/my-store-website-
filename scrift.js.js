/* ========== Basic Config ========== */
const OWNER_WHATSAPP = "923358090327"; // Replace with your WhatsApp number
const YOUR_EMAIL_ADDRESS = "your-email@example.com"; // Yahan apni email address likhen

/* ========== Language (EN + Malay) ========== */
const i18n = {
    en: {
        shipping: "Free Delivery in Malaysia on orders over RM50",
        nav_new: "New Arrivals",
        nav_best: "Best Sellers",
        nav_contact: "Contact",
        hero_title: "Elevate Your Style",
        hero_sub: "Premium quality at honest prices",
        shop_now: "Shop Now",
        shop_now_btn: "Shop Now",
        cat_women: "Women",
        cat_men: "Men",
        cat_kids: "Kids",
        new_arrivals: "New Arrivals",
        best_sellers: "Best Sellers",
        tagline: "Quality • Comfort • Confidence",
        contact_title: "Contact",
        hours_title: "Hours",
        hours_txt: "Mon–Sat: 10am–8pm",
        store_name: "MyStore",
        store_name_footer: "MyStore",
        all_rights: "All rights reserved.",
        // New texts for modal form
        form_title: "Complete Your Order",
        product_label: "Product:",
        price_label: "Price:",
        name_placeholder: "Full Name",
        email_placeholder: "Email",
        phone_placeholder: "Contact Number",
        address_placeholder: "Address",
        apartment_placeholder: "Apartment / Suite (Optional)",
        payment_select: "Select Payment Method",
        payment_cod: "Cash on Delivery",
        payment_online: "Online Transfer",
        shipping_charges: "Shipping Charges:",
        total_amount: "Total Amount:",
        complete_order_btn: "Complete Order",
        order_whatsapp_btn: "Order via WhatsApp",
        online_transfer_bank: "Bank:",
        online_transfer_account_name: "Account Name:",
        online_transfer_account_no: "Account Number:",
        online_transfer_message: "Please complete your transfer and then click 'Complete Order' button to notify us. Thank you.",
        thank_you_title: "Order Received Successfully!",
        thank_you_message: "Your order has been received. Please transfer the payment and send us a screenshot on WhatsApp for confirmation.",
        final_total_label: "Your total amount is:",
        send_screenshot_btn: "Send Payment Screenshot via WhatsApp",
        alert_fields: "Please fill all required fields."
    },
    ms: {
        shipping: "Penghantaran percuma di Malaysia untuk pesanan melebihi RM50",
        nav_new: "Keluaran Terbaru",
        nav_best: "Terlaris",
        nav_contact: "Hubungi",
        hero_title: "Tingkatkan Gaya Anda",
        hero_sub: "Kualiti premium pada harga berpatutan",
        shop_now: "Beli Sekarang",
        shop_now_btn: "Beli Sekarang",
        cat_women: "Wanita",
        cat_men: "Lelaki",
        cat_kids: "Kanak-kanak",
        new_arrivals: "Keluaran Terbaru",
        best_sellers: "Terlaris",
        tagline: "Kualiti • Keselesaan • Keyakinan",
        contact_title: "Hubungi",
        hours_title: "Waktu Operasi",
        hours_txt: "Isn–Sab: 10pg–8mlm",
        store_name: "MyStore",
        store_name_footer: "MyStore",
        all_rights: "Hak cipta terpelihara.",
        // New texts for modal form
        form_title: "Lengkapkan Pesanan Anda",
        product_label: "Produk:",
        price_label: "Harga:",
        name_placeholder: "Nama Penuh",
        email_placeholder: "E-mel",
        phone_placeholder: "Nombor Telefon",
        address_placeholder: "Alamat",
        apartment_placeholder: "Apartmen / Suite (Pilihan)",
        payment_select: "Pilih Kaedah Pembayaran",
        payment_cod: "Bayar Semasa Terima (COD)",
        payment_online: "Pindahan Dalam Talian",
        shipping_charges: "Caj Penghantaran:",
        total_amount: "Jumlah Keseluruhan:",
        complete_order_btn: "Lengkapkan Pesanan",
        order_whatsapp_btn: "Pesanan melalui WhatsApp",
        online_transfer_bank: "Bank:",
        online_transfer_account_name: "Nama Akaun:",
        online_transfer_account_no: "Nombor Akaun:",
        online_transfer_message: "Sila lengkapkan pindahan anda dan klik butang 'Lengkapkan Pesanan' untuk memberitahu kami. Terima kasih.",
        thank_you_title: "Pesanan Diterima!",
        thank_you_message: "Pesanan anda telah diterima. Sila pindahkan pembayaran dan hantar tangkapan skrin (screenshot) kepada kami melalui WhatsApp untuk pengesahan.",
        final_total_label: "Jumlah keseluruhan anda ialah:",
        send_screenshot_btn: "Hantar Tangkapan Skrin Pembayaran melalui WhatsApp",
        alert_fields: "Sila isi semua ruangan yang diperlukan."
    }
};

/* ========== Language Switch ========== */
function setLang(lang = "en") {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const langData = i18n[lang];

        if (langData && langData[key]) {
            el.textContent = langData[key];
        }
    });

    // Handle placeholders and other specific elements
    const langData = i18n[lang];
    if (document.getElementById("customerName")) {
        document.getElementById("customerName").placeholder = langData.name_placeholder;
        document.getElementById("customerEmail").placeholder = langData.email_placeholder;
        document.getElementById("customerPhone").placeholder = langData.phone_placeholder;
        document.getElementById("customerAddress").placeholder = langData.address_placeholder;
        document.getElementById("customerApartment").placeholder = langData.apartment_placeholder;
        
        document.querySelector('select[required] option[value=""]').textContent = langData.payment_select;
        document.querySelector('select[required] option[value="COD"]').textContent = langData.payment_cod;
        document.querySelector('select[required] option[value="Online"]').textContent = langData.payment_online;
    }

    // Update online transfer details text
    if (document.getElementById('transferDetails')) {
        const transferDetails = document.getElementById('transferDetails');
        transferDetails.querySelector('p:nth-child(1) strong').textContent = langData.online_transfer_bank;
        transferDetails.querySelector('p:nth-child(2) strong').textContent = langData.online_transfer_account_name;
        transferDetails.querySelector('p:nth-child(3) strong').textContent = langData.online_transfer_account_no;
        transferDetails.querySelector('p:nth-child(4)').textContent = langData.online_transfer_message;
    }

    // Update thank you message texts
    if (document.getElementById('thankYouMessage')) {
        const thankYouMessage = document.getElementById('thankYouMessage');
        thankYouMessage.querySelector('h3').textContent = langData.thank_you_title;
        thankYouMessage.querySelector('p:nth-of-type(1)').textContent = langData.thank_you_message;
        thankYouMessage.querySelector('p:nth-of-type(2) span').textContent = langData.final_total_label;
        thankYouMessage.querySelector('#whatsappFinalLink').textContent = langData.send_screenshot_btn;
    }
    
    localStorage.setItem("lang", lang);
}

document.getElementById("lang-en")?.addEventListener("click", () => setLang("en"));
document.getElementById("lang-ms")?.addEventListener("click", () => setLang("ms"));
setLang(localStorage.getItem("lang") || "en");

/* ========== Mobile Menu Toggle ========== */
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

function toggleMenu() {
    nav.classList.toggle("active");
}
hamburger?.addEventListener("click", toggleMenu);

// Close menu on outside click
document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove("active");
    }
});

/* ========== WhatsApp Floating Button ========== */
function openWhatsApp() {
    const url = `https://wa.me/${OWNER_WHATSAPP}`;
    window.open(url, "_blank");
}
window.openWhatsApp = openWhatsApp;

/* ========== Product Modal & WhatsApp Orders ========== */
function openOrderForm(productName, price) {
    document.getElementById("orderModal").style.display = "flex";
    document.getElementById("productName").innerText = productName;
    document.getElementById("productPrice").innerText = price;
    
    const shipping = 100;
    const total = parseFloat(price) + shipping;
    document.getElementById("totalAmount").innerText = `RM ${total.toFixed(2)}`;

    document.getElementById("whatsappDirect").href =
        `https://wa.me/${OWNER_WHATSAPP}?text=Hi, I'm interested in ${productName} for RM ${price}. Total including shipping is RM ${total.toFixed(2)}.`;
}
window.openOrderForm = openOrderForm;

function closeOrderForm() {
    document.getElementById("orderModal").style.display = "none";
    
    document.getElementById('orderFormContent').style.display = 'block';
    document.getElementById('thankYouMessage').style.display = 'none';
}
window.closeOrderForm = closeOrderForm;

// Show/hide transfer details based on payment method selection
document.getElementById('paymentMethod').addEventListener('change', function() {
    const transferDetails = document.getElementById('transferDetails');
    if (this.value === 'Online') {
        transferDetails.style.display = 'block';
    } else {
        transferDetails.style.display = 'none';
    }
});


function sendOrder() {
    const name = document.getElementById("customerName").value;
    const email = document.getElementById("customerEmail").value;
    const phone = document.getElementById("customerPhone").value;
    const address = document.getElementById("customerAddress").value;
    const apartment = document.getElementById("customerApartment").value;
    const payment = document.getElementById("paymentMethod").value;
    const product = document.getElementById("productName").innerText;
    const price = parseFloat(document.getElementById("productPrice").innerText);
    const shipping = 100;
    const total = price + shipping;

    if(!name || !email || !phone || !address || !payment){
        alert(i18n[localStorage.getItem("lang") || "en"].alert_fields);
        return;
    }

    // Prepare message for WhatsApp
    const whatsappMessage = `Order Details:
Product: ${product}
Price: RM ${price}
Shipping: RM ${shipping}
Total: RM ${total.toFixed(2)}
Name: ${name}
Email: ${email}
Phone: ${phone}
Address: ${address} ${apartment}
Payment Method: ${payment}`;
    
    if (payment === "Online") {
        document.getElementById('orderFormContent').style.display = 'none';
        document.getElementById('thankYouMessage').style.display = 'block';
        document.getElementById('finalTotal').innerText = `RM ${total.toFixed(2)}`;
        
        const lang = localStorage.getItem("lang") || "en";
        const thankYouMessageText = i18n[lang].thank_you_message;
        
        document.getElementById('whatsappFinalLink').href =
            `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(thankYouMessageText + "\n\n" + whatsappMessage)}`;
    } else if (payment === "COD") {
        window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        closeOrderForm();
    }
}
window.sendOrder = sendOrder;