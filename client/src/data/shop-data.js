const SHOP_DATA = [
        {
          id: 1,
          name: "Intel Core i3",
          image: "https://cdn.mdcomputers.in/image/cache/catalog/processor/intel/bx80684i39350kf/bx80684i39350kf-image-main-600x600.jpg",
          price: 120,
          category : 'Processors',
          description : "10th Gen Comet Lake Intel Core i3-10100 Desktop Processor Featured With 4 Cores, 8 Threads, Up To 4.3GHz Boost Clock, LGA 1200 Socket"
        },
        {
          id: 2,
          name: "Intel Core i5",
          image: "https://m.media-amazon.com/images/I/71709S6VMTL._SY450_.jpg",
          price: 180,
          category : 'Processors',
          description : "10th Gen Comet Lake Intel Core i5-10400 Desktop Processor Featured With 6 Cores, 12 Threads, Up To 4.3GHz LGA 1200 Socket"
        },
        {
          id: 3,
          name: "Intel Core i7",
          image: "https://cdn.mdcomputers.in/image/cache/catalog/processor/intel/i7-10700k/i7-10700k-image-main-600x600.jpg",
          price: 250,
          category : 'Processors',
          description : "Intel Core i7-13700 Processor is a 13th Gen Desktop Processor. This Products formerly Raptor Lake It has 16 Cores and 24 Threads. Max Turbo Frequency 5.20GHz. 30 MB Intel® Smart Cache with Intel UHD Graphics 770."
        },
        {
          id: 4,
          name: "Intel Core i9",
          image: "https://m.media-amazon.com/images/I/61ZRFy6GZ4L._SL1280_.jpg",
          price: 250,
          category : 'Processors',
          description : "ntel Core i9-13900 Processor is a 13th Gen Desktop Processor. It has 24 Cores and 32 Threads. Max Turbo Frequency 5.60GHz. 36 MB Intel Smart Cache with Intel UHD Graphics 770"
        },
        {
          id: 5,
          name: 'Ryzen 3',
          image: 'https://www.powerplanetonline.com/cdnassets/amd_ryzen_3_4100_01_l.jpg',
          price: 130,
          category : 'Processors',
          description : "AMD Ryzen 3 4000 G-Series with Radeon Graphics Desktop Processor. This Processor Belongs to Renoir Former. It has 4 Cores and 8 Threads. Max boost clock 4.0GHz. It supports AM4 Socket"
        },
        {
          id: 6,
          name: 'Ryzen 5',
          image: 'https://www.notebookcheck.net/fileadmin/Notebooks/AMD/ryzen5_badge.jpg',
          price: 170,
          category : 'Processors',
          description : "Amd Ryzen 5 3rd Gen CPU 3600 on AM4 Socket, 6 Cores, 12 Threads, 4.2GHz Boost Clock, 35MB Cache"
        },
        {
          id: 7,
          name: 'Ryzen 7',
          image: 'https://m.media-amazon.com/images/I/61DYLoyNRWL._SL1384_.jpg',
          price: 220,
          category : 'Processors',
          description : "AMD Ryzen 7 7700 Series with Radeon Graphics Desktop Processor, this Processor Belongs to Raphael Former, It has 8 Cores and 16 Threads, Max boost clock 5.3GHz, It supports AM5 Socket"
        },
        {
          id: 8,
          name: 'Ryzen 9',
          image: 'https://www.tradeinn.com/f/13821/138214230/amd-ryzen-9-5950x-3.4ghz-cpu.jpg',
          price: 260,
          category : 'Processors',
          description : "Ryzen 5000 Series, Vermeer Based High-End Desktop Processor, Ryzen 9 5950X with 16 Cores, 32 Threads at 4.9 GHz, Delivers Groundbreaking performance and efficiency on the same 7nm FinFet Node"
        },
        {
          id: 10,
          name: 'NVIDIA RTX 3090',
          image: 'https://m.media-amazon.com/images/I/81QuOSSvYAS._AC_SL1500_.jpg',
          price: 750,
          category : 'Graphics Cards',
          description : "The GeForce RTX™ 3090 is powered by Ampere—NVIDIA’s 2nd gen RTX architecture. They feature dedicated 2nd gen RT Cores and 3rd gen Tensor Cores, streaming multiprocessors, and a staggering 24 GB of G6X memory to deliver high-quality performance for gamers and creators."
        },
        {
          id: 11,
          name: 'NVIDIA RTX 3080Ti',
          image: 'https://m.media-amazon.com/images/I/619h9dd1VhS._SL1000_.jpg',
          price: 280,
          category : 'Graphics Cards',
          description : "The GeForce RTX™ 3080 Ti graphics card deliver the performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture. They are built with dedicated 2nd gen RT Cores and 3rd gen Tensor Cores, streaming multiprocessors, and G6X memory for an amazing gaming experience."
        },
        {
          id: 12,
          name: 'NVIDIA RTX 3070',
          image: 'https://m.media-amazon.com/images/I/519Rza80gZS.jpg',
          price: 110,
          category : 'Graphics Cards',
          description : "The GeForce RTXTM 3070 Ti and RTX 3070 graphics cards are powered by Ampere—NVIDIA’s 2nd gen RTX architecture. Built with dedicated 2nd gen RT Cores and 3rd gen Tensor Cores, streaming multiprocessors, and high-speed memory, they give you the power you need to rip through the most demanding games."
        },
        {
          id: 13,
          name: 'NVIDIA RTX 3050',
          image: 'https://m.media-amazon.com/images/I/61+jWW9yGLL._SL1200_.jpg',
          price: 160,
          category : 'Graphics Cards',
          description : "The GeForce RTX™ 3050 is built with graphics performance of the NVIDIA Ampere architecture. It offers dedicated 2nd gen RT Cores and 3rd gen Tensor Cores, streaming multiprocessors, and high-speed G6 memory to tackle the latest games. Step up to GeForce RTX."
        },
        {
          id: 14,
          name: 'NVIDIA RTX 4080',
          image: 'https://fdn.gsmarena.com/imgroot/news/22/10/4080-unlaunched/inline/-1200/gsmarena_001.jpg',
          price: 160,
          category : 'Graphics Cards',
          description : "The NVIDIA® GeForce RTX™ 4080 delivers the ultra performance and features that enthusiast gamers and creators demand. Bring your games and creative projects to life with ray tracing and AI-powered graphics. It's powered by the ultra-efficient NVIDIA Ada Lovelace architecture and 16GB of superfast G6X memory."
        },
        {
          id: 15,
          name: 'NVIDIA RTX 4090',
          image: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-ada-4090-web-og-1200x630.jpg',
          price: 160,
          category : 'Graphics Cards',
          description : "The NVIDIA® GeForce RTX™ 4090 is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics. Experience ultra-high performance gaming, incredibly detailed virtual worlds, unprecedented productivity, and new ways to create. It’s powered by the NVIDIA Ada Lovelace architecture and comes with 24 GB of G6X memory to deliver the ultimate experience for gamers and creators."
        },
        {
          id: 16,
          name: 'NVIDIA RTX 2080Ti',
          image: 'https://m.media-amazon.com/images/I/61aZgZmpHaL._SL1100_.jpg',
          price: 190,
          category : 'Graphics Cards',
          description : "he GeForce RTX 2080 Ti is an enthusiast-class graphics card by NVIDIA. Built on the 12 nm process, and based on the TU102 graphics processor, in its TU102-300A-K1-A1 variant, the card supports DirectX 12 Ultimate. This ensures that all modern games will run on GeForce RTX 2080 Ti. Additionally, the DirectX 12 Ultimate capability guarantees support for hardware-raytracing, variable-rate shading and more, in upcoming video games."
        },
        {
          id: 17,
          name: 'NVIDIA GTX 1660Ti',
          image: 'https://m.media-amazon.com/images/I/8149aCXpDlL._SL1500_.jpg',
          price: 200,
          category : 'Graphics Cards',
          description : "The GeForce GTX 1660 Ti is a performance-segment graphics card by NVIDIA. Built on the 12 nm process, and based on the TU116 graphics processor, in its TU116-400-A1 variant, the card supports DirectX 12. This ensures that all modern games will run on GeForce GTX 1660 Ti. The TU116 graphics processor is an average sized chip with a die area of 284 mm² and 6,600 million transistors. It features 1536 shading units, 96 texture mapping units, and 48 ROPs. NVIDIA has paired 6 GB GDDR6 memory with the GeForce GTX 1660 Ti, which are connected using a 192-bit memory interface. The GPU is operating at a frequency of 1500 MHz, which can be boosted up to 1770 MHz, memory is running at 1500 MHz (12 Gbps effective)."
        },
        {
          id: 18,
          name: 'Asus ROG Crosshair VIII Dark Hero',
          image: 'https://m.media-amazon.com/images/I/814Rm4HxFIL._AC_SS450_.jpg',
          price: 125,
          category : 'Mother Boards',
          description : "AMD X570 ATX gaming motherboard with PCIe 4.0, 16 power stages, OptiMem III, on-board Wi-Fi 6 (802.11ax), 2.5 Gbps Ethernet, USB 3.2, SATA, M.2 and Aura Sync RGB lighting"
        },
        {
          id: 19,
          name: 'Asus ROG Maximus XII Extreme',
          image: 'https://m.media-amazon.com/images/I/418P8lP5zvL.jpg',
          price: 90,
          category : 'Mother Boards',
          description : "Expertly tuned by ROG Engineers to bring you the ultimate performance. Made to be extreme as the name suggested, is positioned for max performance water-cooling enthusiasts. Combining hardware and software, to achieve optimized overclocking, high-speed memory support and comprehensive water and fan cooling controls, Maximus XII Extreme delivers ultimate performance combined with efficient, reliable operation."
        },
        {
          id: 20,
          name: 'Asus ROG Strix B550-F',
          image: 'https://elitehubs.com/wp-content/uploads/2020/12/90mb14s0-m0iay0-image-main-600x600-1.jpg',
          price: 90,
          category : 'Mother Boards',
          description : "AMD B550 Ryzen AM4 Gaming ATX motherboard with PCIe® 4.0, teamed power stages, Intel® 2.5Gb Ethernet, dual M.2 with heatsinks, SATA 6 Gbps, USB 3.2 Gen 2 and Aura Sync RGB lighting"
        },
        {
          id: 21,
          name: 'Gigabyte X670E Aorus Master',
          image: 'https://gamesncomps.com/wp-content/uploads/2022/10/1-2022-10-10T172542.060.jpg',
          price: 165,
          category : 'Mother Boards',
          description : "AMD Socket AM5 - Supports AMD Ryzen™ 7000 Series Processors, Unparalleled Performanc Twin 16*+2+2 Phases Digital VRM Solution, Dual Channel DDR 4*SMD DIMMs with AMD EXPO™ & Intel® XMP Memory Module Support, Next Generation Storage - 2*PCIe 5.0 x4 and 2*PCIe 4.0 x4 M.2 Connectors, Fins-Array III & M.2 Thermal Guard III-To Ensure VRM Power Stability & 25110 PCIe 5.0 M.2 SSD Performance"
        },
        {
          id: 22,
          name: 'Gigabyte B650 Aorus Pro AX Motherboard',
          image: 'https://gamesncomps.com/wp-content/uploads/2022/10/6-2022-10-10T175912.495.jpg',
          price: 185,
          category : 'Mother Boards',
          description : "AMD Socket AM5 - Supports AMD Ryzen™ 7000 Series Processors, Unparalleled Performance -Twin 16*+2+1 Phases Digital VRM Solution, Dual Channel DDR5：4*SMD DIMMs with AMD EXPO™ & Intel® XMP Memory Module Support, Next Generation Storage-1*PCIe 5.0 x4 and 2*PCIe 4.0 x4 M.2 Connectors, Mega-Heatpipe & M.2 Thermal Guard III -To Ensure VRM Power Stability & 25110 PCIe 5.0 M.2 SSD Performance"
        },
        {
          id: 23,
          name: 'WD Internal 4TB',
          image: 'https://5.imimg.com/data5/IC/AN/RY/SELLER-86555969/wd-hard-disk-drive-500x500.jpg',
          price: 25,
          category : 'Storage',
          description : "Boost your PC storage with WD Blue drives, the brand designed just for desktop and all-in-one PCs. The WD Blue family now delivers data storage capacities up to 6 TB."
        },
        {
          id: 24,
          name: 'Crucial P3 500GB',
          image: 'https://www.pcworld.com/wp-content/uploads/2022/08/Crucial-P3-SSD-Flat-Front-Image-color-hero.jpg?quality=50&strip=all&w=1024',
          price: 20,
          category : 'Storage',
          description : "With NVMe™ performance that’s nearly 6x faster than SATA2 and storage capacities up to 4TB3, the P3 leaves older storage technology in the dust. Get faster bootups, downloads and file transfers, and store all your files, photos, videos, apps, and games with room to spare with the quality and dependability you expect from Crucial."
        },
        {
          id: 25,
          name: 'WD Green SATA 240GB',
          image: 'https://m.media-amazon.com/images/I/81mB3Lho7dL._SL1500_.jpg',
          price: 80,
          category : 'Storage',
          description : "SLC (single-level cell) caching boosts write performance to quickly perform everyday tasks, With sequential read speeds up to 545 MB/s quickly boot your system, launch apps and open files.Available in 2.5”/7mm cased and M.2 2280 form factors to accommodate most PCs. Ultra low power-draw so you can use your laptop PC for longer periods of time. Shock-resistant and WD F.I.T. LabTM certified for compatibility and reliability."
        },
        {
          id: 26,
          name: 'Samsung 980 500GB',
          image: 'https://itimpactdeal.in/wp-content/uploads/2021/06/71pUbfXmVlL._SL1500_-600x400.jpg',
          price: 80,
          category : 'Storage',
          description : "It's time to maximize your PC's potential with the 980. Whether you need a boost for gaming or a seamless workflow for heavy graphics, the 980 is the smart choice for outstanding SSD performance, and it's all backed by an NVMe interface and PCIe 3.0 technology."
        },
        {
          id: 27,
          name: 'Western Digital Black 250GB',
          image: 'https://m.media-amazon.com/images/I/51vNa5DEr4L._SY450_.jpg',
          price: 45,
          category : 'Storage',
          description : "Get into the game fast as you zoom past load times with blazing speeds of up to 5,150MB/s (1TB and 2TB models). Equipped with a PCIe Gen4 interface, the WD_BLACK SN770 NVMe SSD helps fuel in-game responsiveness, minimize stutter, and provide smooth streaming for a performance boost you can see and feel. Get tons of space for your latest games, future updates, and downloadable content with capacities up to 2TB"
        },
        {
          id: 28,
          name: 'Western Digital Green SN350',
          image: 'https://m.media-amazon.com/images/I/518nip6n34L._SL1357_.jpg',
          price: 135,
          category : 'Storage',
          description : "The WD Green SN350 NVMe SSD can revitalize your old computer for daily use. Whether you’re in class, shopping, chatting or surfing, this drive can work up to four times faster than SATA drives. Because they have no moving parts, SSDs offer a shock-resistant design to help protect your important data against accidental bumps and drops. The slim M.2 2280 form factor allows for a quick and easy upgrade for any computer with an NVMe slot."
        },
        {
          id: 30,
          name: 'Asus TUF Gaming GT301 ARGB Cabinet',
          image: 'https://cdn.mdcomputers.in/image/cache/catalog/cabinet/asus/tuf-gaming-gt301/tuf-gaming-gt301-image-main-600x600.jpg',
          price: 325,
          category : 'Cabinets',
          description : "ASUS TUF Gaming GT301 ATX mid-tower compact case with tempered glass side panel, honeycomb front panel, 120mm AURA Addressable RGB fan, headphone hanger and 360mm radiator support."
        },
        {
          id: 31,
          name: 'Asus TUF Gaming GT501 RGB Cabinet',
          image: 'https://m.media-amazon.com/images/I/81nuQ9AOxGL._SL1500_.jpg',
          price: 20,
          category : 'Cabinets',
          description : "ASUS TUF Gaming GT501 case supports up to EATX with metal front panel, tempered-glass side panel, 120 mm RGB fan, 140 mm PWM fan, radiator space reserved, and USB 3.1 Gen 1"
        },
        {
          id: 32,
          name: 'Ant Esports ICE-5000 RGB',
          image: 'https://megacompuworldjaipur.com/image/cache/catalog/Product/Cabinet/ANT%20ESPORTS/ICE-5000-5-700x550.jpg',
          price: 25,
          category : 'Cabinets',
          description : "The Ant Esports ICE-5000 is designed to impress and build to deliver high airflow under all circumstances. With a mid-tower design that’s engineered to maximize space utilization, the ICE-5000 can easily house motherboards of upto E-ATX standards and have a perforated PSU shroud to provide tertiary cooling solutions. A slid-able HDD cage underneath the PSU shroud not only makes it modular but also allows the installation of higher wattage power supplies that are long and needed for workstation builds."
        },
        {
          id: 33,
          name: 'Ant Esports ICE-200TG ARGB',
          image: 'https://cdn.mdcomputers.in/image/cache/catalog/cabinet/ant-esports/ice-200tg/ice-200tg-image-main-600x600.jpg',
          price: 25,
          category : 'Cabinets',
          description : "The Ant Esports ICE 200TG is a mid-tower cabinet that offers premium peppy looks and up-to-date functionality all in a single package. With its gloss black front panel that offers front mesh and side perforation for optimum ventilation to deliver excellent cooling thanks to its ability to house three 120mm fans in the front or a 240mm radiator, the case comes with its own X-factor in form of an Auto-RGB lit X shape on the front to complete the deal. Equipped with seven expansion slots and enough room to house large air coolers of up to 159mm height and long graphics cards of up to 360mm in length the case is designed to house every modern-day build possible."
        },
        {
          id: 34,
          name: 'Cooler Master CMP 510',
          image: 'https://cdn.coolermaster.com/media/assets/1125/cmp510_webpage_1175x1120_imagewithtext-3-imageleftorright.png',
          price: 40,
          category : 'Cabinets',
          description : "With a construction that provides generous airflow and a stream of light, the CMP 510 boasts a glowing ARGB edge to adorn the front panel. Mesh makes up a substantial portion of its structure to provide optimum performance potential. Liquid-cooling support and the capability to house a total of 6 fans ensures the CMP 510 is always ready for thermal upgrades. Graphics card clearance spans 350mm to support the latest, largest cards."
        },
        {
          id: 35,
          name: 'Ant Esports ICE-280TG',
          image: 'https://cdn.shopify.com/s/files/1/0615/1906/9368/products/61XDW52EEiL._SL1080.jpg?v=1648621242',
          price: 25,
          category : 'Cabinets',
          description : "Continuing the legacy of the Ant Esports ICE-280TG the ICE-280TG White brings the same tested combination of robust build and sparkling glow in an all-new white avatar! The ICE 280 TGW is as unique as it gets with its front honeycomb-like mesh design that lights up and can be controlled via the provided LED button. You are bound to be noticed with the ICE 280 TG thanks to its unique looks and ample housing capacity of a full ATX motherboard."
        },
        {
          id: 36,
          name: 'Aerocool Mirage L360 ARGB',
          image: 'https://cdn.mdcomputers.in/image/cache/catalog/cpu%20cooler/aerocool/mirage-l360-argb-white/mirage-l360-argb-white-image-main-600x600.jpg',
          price: 325,
          category : 'Cooling System',
          description : "360MM ARGB LIQUID COOLER is a High-performance liquid cooler with an Infinity Mirror RGB design to deliver a unique and mesmerizing lighting experience. The Mirage is built to meet the highest engineering standards, ensuring your system will stay cool even under the most demanding conditions."
        },
        {
          id: 37,
          name: 'Alseye M360 PLUS ARGB',
          image: 'https://cdn.mdcomputers.in/image/cache/catalog/cpu%20cooler/alseye/m360-plus-argb-black/m360-plus-argb-black-image-main-600x600.jpg',
          price: 20,
          category : 'Cooling System',
          description : "M360 Plus is equipped with a 360mm water radiator, the flagship model of the AIO CPU liquid cooler. High-performance CPU cooler which TDP is up to 280W, Triple 120mm ARGB & PWM M120-P fans. PWM control, low noise operation, high heat dissipation effect. Double LED linear ARGB light effect water cooling pump head with LED temperature display can precisely show the temperature of the CPU surface in real time."
        },
        {
          id: 38,
          name: 'Antec Symphony 360 ARGB',
          image: 'https://www.antec.com/product/cooling/images/gallery-symphony-360-argb-02.jpg',
          price: 25,
          category : 'Cooling System',
          description : "The brand-new Antec Symphony 360 ARGB liquid cooler delivers a cooling solution with unique ARGB lighting. The mirror ARGB lighting bar gives a subtle and beautiful color scheme. Specifically designed using EPDM+IIP high-density tubes and 14 dense cooling fins, the Symphony ARGB not only extends its lifespan but also enhances the entire cooling performance. The Symphony ARGB is ready to bring you a brand-new user experience."
        },
        {
          id: 39,
          name: 'Asus ROG Strix LC II 360 ARGB',
          image: 'https://m.media-amazon.com/images/I/71E7Nnlt-JL._SL1500_.jpg',
          price: 25,
          category : 'Cooling System',
          description : "ROG Strix LC II 360 ARGB all-in-one liquid CPU cooler with Aura Sync, Intel® LGA 1150/1151/1155/1156/1200/2066 and AMD AM4/TR4 support and three ROG 120 mm addressable RGB radiator fans"
        },
        {
          id: 40,
          name: 'Cooler Master Hyper H410R RGB',
          image: 'https://m.media-amazon.com/images/I/71+QnNXvUSL._SY450_.jpg',
          price: 40,
          category : 'Cooling System',
          description : "The Hyper H410R RGB, a new member of the longstanding Hyper Series, is an , compact and high performance air cooler that its compact heatsink is a great match for small form factor system. The special fin design optimizes air flow toward heatpipes. Its 92mm squared RGB fan features a wide fan speed range and can be fine tuned for maximum airflow and cooling performance or silent operation."
        },
        {
          id: 41,
          name: 'Corsair CX750M',
          image: 'https://m.media-amazon.com/images/I/51HHEX9ENhL.jpg',
          price: 325,
          category : 'Power Supply',
          description : "CORSAIR CX-M Series Low-Noise Power Supplies with single EPS12V connectors offer semi-modular cabling, a long-lasting rifle bearing fan, and Japanese capacitors for reliable, low-noise operation."
        },
        {
          id: 42,
          name: 'EVGA 850 BQ',
          image: 'https://cdn.mdcomputers.in/image/cache/catalog/smps/evga/110-bq-0850-v1/110-bq-0850-v1-image-main-600x600.jpg',
          price: 20,
          category : 'Power Supply',
          description : "Introducing the next generation in value; the EVGA 850 BQ. These power supplies take some of the best features from EVGA's award winning power supply lineup, like a 140mm fan with near silent operation and modular cables to make one of the best values today in high performance power supplies."
        },
        {
          id: 43,
          name: 'Adata XPG Core Reactor 650',
          image: 'https://techpc7.com/wp-content/uploads/2022/08/product_2250_1.png',
          price: 25,
          category : 'Power Supply',
          description : "The XPG CORE REACTOR is a modular, 80 Plus Gold power supply unit equipped with 100% Japanese capacitors. Combined with Line Level Control (LLC) resonant topology, it is power-efficient, reliable and makes creating a tidy build easy."

        },
        {
          id: 44,
          name: 'Asus ROG Strix 1000G',
          image: 'https://rukminim1.flixcart.com/image/416/416/ko4ni4w0/psu/6/t/a/rog-strix-1000g-asus-original-imag2n9w5hu8zh6t.jpeg?q=70',
          price: 25,
          category : 'Power Supply',
          description : "The ROG Strix 1000W Gold PSU brings premium cooling performance to heavyweight gaming rigs"
        },
        {
          id: 45,
          name: 'Asus ROG Thor 1200P2',
          image: 'https://cdn.mdcomputers.in/image/cache/catalog/smps/asus/rog-thor-1200p2-gaming/rog-thor-1200p2-gaming-image-main-600x600.jpg',
          price: 40,
          category : 'Power Supply',
          description : "Lambda A++ Certification confirms the latest Thor wields menacing power in absolute stealth.ROG heatsinks cover critical components, delivering lower temperatures and reduced noise. A 135mm Axial-tech fan with PWM control delivers lower noise and keeps thermals in check. Built with low-ESR capacitors and other premium components to achieve 80 Plus Platinum Certification. Aura Sync compatibility lets you customize and sync lighting effects with other compatible hardware."
        },
        {
          id: 46,
          name: 'Adata XPG Spectrix D60G 8GB',
          image: 'https://m.media-amazon.com/images/I/51nt7V2HWAL._SL1061_.jpg',
          price: 325,
          category : 'RAM',
          description : "The XPG SPECTRIX D60G DDR4 memory features a unique dual RGB light strip design that gives it the largest RGB surface area of any memory module! What's more, it sports a wide frequency range from 3000-4133MHz and supports Intel® XMP 2.0 profiles for easy overclocking."
        },
        {
          id: 47,
          name: 'Adata XPG Gammix D30 16GB',
          image: 'https://m.media-amazon.com/images/I/710ak2j2wtL._SY450_.jpg',
          price: 20,
          category : 'RAM',
          description : "The GAMMIX D30 features an edgy wing-shaped design that exudes a sense of power and stealth. It’s incased in a gray, glossy heatsink that contrasts beautifully with your choice of a translucent red top cover. GAMMIX D30 brings you excellent performance with speeds ranging from 3200MHz to 3600MHz and supports Intel® X299 2666MHz and AMD AM4 / Ryzen platforms."
        },
        {
          id: 48,
          name: 'Adata Spectrix D50 RGB 16GB',
          image: 'https://cdn.mdcomputers.in/image/cache/catalog/memory/adata/ax4u3000716g16a-st50/ax4u3000716g16a-st50-image-main-600x600.jpg',
          price: 25,
          category : 'RAM',
          description : "Reaching speeds of up to 4133MHz and sporting a maximum capacity of 32GB, the XPG SPECTRIX D50 is a monster of a memory module. It also has looks to kill with an elegant geometric styling and a stunning triangular RGB light bar."
        },
        {
          id: 49,
          name: 'Adata XPG Gammix D20 8GB',
          image: 'https://cdn.mdcomputers.in/image/cache/catalog/memory/adata/ax4u36008g18i--cbk20/ax4u36008g18i--cbk20--image--main-600x600.jpg',
          price: 25,
          category : 'RAM',
          description : "The XPG GAMMIX D20 DDR4 memory module is like a vigilante rising from the darkness. Its stealthy 4133MHz performance and sinister black exterior will strike fear into the heart of any opponent."
        },
        {
          id: 50,
          name: 'Corsair Vengeance RGB RS 16GB',
          image: 'https://cdn.mdcomputers.in/image/cache/catalog/memory/corsair/cmg16gx4m1e3200c16/corsair-vengeance-rgb-rs-series-16gb-ddr4-3200mhz-image-main-600x600.jpg',
          price: 40,
          category : 'RAM',
          description : "CORSAIR VENGEANCE RGB RS DDR4 memory punches up your PC’s aesthetics with dynamic, individually addressable RGB lighting, while delivering outstanding performance optimized for Intel® and AMD motherboards."
        }
  ]
  
  export default SHOP_DATA