/* ========================================
   PUSAT WIFI — Provider Data
   ======================================== */

const providers = [
    {
        name: "HiFi",
        status: "active",
        logo: "assets/providers/hifi.svg",
        url: "#"
    },
    {
        name: "CBN",
        status: "active",
        logo: "assets/providers/cbn.svg",
        url: "#"
    }
];

const totalSlots = 20;

const providerGrid = document.getElementById("provider-grid");

function createProviderCard(provider) {
    const card = document.createElement("article");

    card.className = "provider-card";

    card.innerHTML = `
        <div class="provider-logo">
            <img
                src="${provider.logo}"
                alt="Logo ${provider.name}"
                loading="lazy"
            >
        </div>

        <div class="provider-info">
            <h3>${provider.name}</h3>
            <p>Internet</p>
        </div>

        <a
            class="provider-link"
            href="${provider.url}"
        >
            Lihat →
        </a>
    `;

    return card;
}

function createAvailableSlot() {
    const slot = document.createElement("article");

    slot.className = "provider-card available-slot";

    slot.innerHTML = `
        <div class="slot-content">
            <span>SLOT TERSEDIA</span>
            <small>Space Available</small>
        </div>
    `;

    return slot;
}

function renderProviders() {
    providerGrid.innerHTML = "";

    const activeProviders = providers.filter(
        provider => provider.status === "active"
    );

    activeProviders.forEach(provider => {
        providerGrid.appendChild(
            createProviderCard(provider)
        );
    });

    const emptySlots = totalSlots - activeProviders.length;

    for (let i = 0; i < emptySlots; i++) {
        providerGrid.appendChild(
            createAvailableSlot()
        );
    }
}

renderProviders();