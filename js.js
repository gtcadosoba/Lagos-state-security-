

const lagosLGAs = [
    { name: "Agege", labeledCore: "LAG-CORE-AGE-01", phone: "2348011111111" },
    { name: "Ajeromi-Ifelodun", labeledCore: "LAG-CORE-AJE-02", phone: "2348011111112" },
    { name: "Alimosho", labeledCore: "LAG-CORE-ALM-03", phone: "2348011111113" },
    { name: "Amuwo-Odofin", labeledCore: "LAG-CORE-AMU-04", phone: "2348011111114" },
    { name: "Apapa", labeledCore: "LAG-CORE-APA-05", phone: "2348011111115" },
    { name: "Badagry", labeledCore: "LAG-CORE-BAD-06", phone: "2348011111116" },
    { name: "Epe", labeledCore: "LAG-CORE-EPE-07", phone: "2348011111117" },
    { name: "Eti-Osa", labeledCore: "LAG-CORE-ETO-08", phone: "2348011111118" },
    { name: "Ibeju-Lekki", labeledCore: "LAG-CORE-IBJ-09", phone: "2348011111119" },
    { name: "Ifako-Ijaiye", labeledCore: "LAG-CORE-IFJ-10", phone: "2348011111120" },
    { name: "Ikeja", labeledCore: "LAG-CORE-IKJ-11", phone: "2348011111121" },
    { name: "Ikorodu", labeledCore: "LAG-CORE-IKR-12", phone: "2348011111122" },
    { name: "Kosofe", labeledCore: "LAG-CORE-KOS-13", phone: "2348011111123" },
    { name: "Lagos Island", labeledCore: "LAG-CORE-LGI-14", phone: "2348011111124" },
    { name: "Lagos Mainland", labeledCore: "LAG-CORE-LGM-15", phone: "2348011111125" },
    { name: "Mushin", labeledCore: "LAG-CORE-MUS-16", phone: "2348011111126" },
    { name: "Ojo", labeledCore: "LAG-CORE-OJO-17", phone: "2348011111127" },
    { name: "Oshodi-Isolo", labeledCore: "LAG-CORE-OSH-18", phone: "2348011111128" },
    { name: "Shomolu", labeledCore: "LAG-CORE-SHO-19", phone: "2348011111129" },
    { name: "Surulere", labeledCore: "LAG-CORE-SUR-20", phone: "2348011111130" }
];

// ===============================
// PHONE CALL FUNCTION
// Opens the mobile phone dialer
// ===============================
function makePhoneCall(phoneNumber) {
    if (!phoneNumber) {
        alert("Phone number not available");
        return;
    }
    window.location.href = "tel:" + phoneNumber;
}

// ===============================
// WHATSAPP FUNCTION (FIXED)
// Opens WhatsApp app if installed,
// otherwise opens WhatsApp Web
// ===============================
function openWhatsApp(phoneNumber) {
    if (!phoneNumber) {
        alert("WhatsApp number not available");
        return;
    }

    const whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber;
    window.open(whatsappURL, "_blank");
}

// ===============================
// RENDER LGA CARDS INTO HTML
// ===============================
const lgaList = document.getElementById("lgaList");

lagosLGAs.forEach(lga => {
    const card = document.createElement("div");
    card.className = "lga-card";

    card.innerHTML = `
        <h3>${lga.name} Local Government Area</h3>
        <p><strong>Labeled Core:</strong> ${lga.labeledCore}</p>

        <button class="call-btn" onclick="makePhoneCall('${lga.phone}')">
            📞 Call LGA Office
        </button>

        <button class="whatsapp-btn" onclick="openWhatsApp('${lga.phone}')">
            💬 WhatsApp LGA
        </button>
    `;

    lgaList.appendChild(card);
});