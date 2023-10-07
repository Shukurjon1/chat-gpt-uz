import { Link } from "react-router-dom";
import PersonalInformationSVG from "../../assets/personal_information_illustration.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLanguage } from "@fortawesome/free-solid-svg-icons";
import CustomImageButton from "./components/CustomImageButton";
import ContactLink from "../../components/ContactLink";

export default function PrivacyPolicyUz() {
    return (
        <div className=" max-w-xl bg-white p-10 mx-auto">
            <img
                className="w-full md2x:mb-5"
                src={PersonalInformationSVG}
                alt="Personal Information Image"
            />
            <h2 className=" text-3xl">Maxfiylik siyosati</h2>
            <p className="text-gray-600 my-2">Yangilangan sana: 2023-02-02</p>
            <p className="text-gray-700 mt-2 font-light">
                <span className=" font-bold">Chat-GPT</span> maxfiyligingizni
                himoya qilishga intiladi. Ushbu Maxfiylik siyosati sizning
                shaxsiy ma'lumotlaringiz Chat-GPT tomonidan qanday to'planishi,
                ishlatilishi va oshkor etilishini tushuntiradi. Ushbu Maxfiylik
                siyosati bizning,&nbsp;
                <Link
                    to="https://chat-gpt.uz"
                    className="text-indigo-600 hover:underline"
                >
                    https://chat-gpt.uz
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mx-1 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </Link>
                , veb-saytimizga va unga tegishli subdomenlarga (birgalikda
                “Xizmat”) taalluqlidir. Xizmatlarimizdan foydalanish orqali siz
                shaxsiy ma'lumotlaringizni to'plash, saqlash, ishlatish va
                oshkor qilishimizni o'qiganingizni, tushunganingizni va
                roziligingizni bildirasiz.
                <span className="font-bold">
                    &nbsp; Agar siz bizning siyosatimiz va amaliyotlarimizga
                    rozi bo'lmasangiz, iltimos bizning xizmatlarimizdan
                    foydalanmang.
                </span>
            </p>
            <h2 className=" text-3xl mt-10 capitalize">
                Ta'riflar va asosiy atamalar
            </h2>
            <p className="text-gray-700 mt-2">
                Ushbu Maxfiylik siyosatidagi narsalarni iloji boricha aniq
                tushuntirishga yordam berish uchun, har safar ushbu atamalardan
                biriga havola qilinganida, qat'iy ravishda quyidagilar
                belgilanadi:
            </p>
            <ul className="mt-3">
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    <span className="font-bold mr-1">Cookie:</span>
                    veb-sayt tomonidan yaratilgan va saqlangan kichik hajmdagi
                    ma'lumotlar. U sizning brauzeringizni aniqlash, tahliliy
                    ma'lumotlarni taqdim etish, til afzalligi kabi siz
                    haqingizda ma'lumotlarni eslab qolish uchun ishlatiladi.
                </li>
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    <span className="font-bold mr-1">Kompaniya:</span>
                    bu siyosatda &ldquo;Kompaniya,&rdquo; &ldquo;biz,&rdquo;
                    &ldquo;bizga,&rdquo; yoki &ldquo;bizning,&rdquo;. Maxfiylik
                    siyosati bo'yicha sizning ma'lumotlaringiz uchun javobgar
                    bo'lgan <span className=" font-bold">Chat-GPT'</span>ga
                    ishora qiladi.
                </li>
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    <span className="font-bold mr-1">Davlat:</span>
                    Chat-GPT yoki Chat-GPT egalari/muassislari joylashgan joyda
                    - bu holatda O'zbekiston.
                </li>
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    <span className="font-bold mr-1">Qurilma:</span>
                    Chat-GPT'ga tashrif buyurish va xizmatlardan foydalanish
                    uchun ishlatilishi mumkin bo'lgan telefon, planshet,
                    kompyuter yoki boshqa har qanday qurilma.
                </li>
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    <span className="font-bold mr-1">IP manzil:</span>
                    Internetga ulangan juda ko'p qurilmalarga Internet protokoli
                    (IP) manzili sifatida ma'lum bo'lgan raqam beriladi.
                    IP-manzil ko'pincha qurilma Internetga ulanayotgan joyni
                    aniqlash uchun ishlatilishi mumkin.
                </li>
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    <span className="font-bold mr-1">Xodimlar:</span>
                    Chat-GPT tomonidan ishlaydigan shaxslarni nazarda tutadi.
                </li>
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    <span className="font-bold mr-1">Shahsiy malumotlar:</span>
                    to'g'ridan-to'g'ri, bilvosita yoki boshqa ma'lumotlar bilan
                    bog'liq bo'lgan har qanday ma'lumot.
                </li>
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    <span className="font-bold mr-1">Xizmatlar:</span>
                    Chat-GPT tomonidan taqdim etilgan xizmatlarga ishora qiladi.
                </li>
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    <span className="font-bold mr-1">
                        Uchinchi tomon xizmati:
                    </span>
                    reklama beruvchilar, tanlov homiylari, reklama va marketing
                    bo'yicha hamkorlar va kontentimizni taqdim etuvchi yoki
                    mahsulot yoki xizmatlari sizni qiziqtirishi mumkin deb
                    hisoblagan boshqalarga tegishli.
                </li>
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    <span className="font-bold mr-1">Veb-sayt:</span>
                    Ushbu URL orqali kirish mumkin bo'lgan Chat-GPT veb-sayti:
                    &nbsp;
                    <Link
                        to="https://chat-gpt.uz"
                        className="text-indigo-600 hover:underline"
                    >
                        https://chat-gpt.uz
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mx-1 inline-block"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </Link>
                </li>
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    <span className="font-bold mr-1">Siz:</span>xizmatlardan
                    foydalanish uchun Chat-GPT platformasida ro'yxatdan o'tgan
                    shaxs, yoki yuridik shaxs.
                </li>
            </ul>
            <h2 className=" text-3xl mt-10 capitalize">
                Biz qanday ma'lumotlarni yig'amiz?
            </h2>
            <p className="text-gray-700 mt-2">
                Xizmatimizga tashrif buyurganingizda, ro'yxatdan o'tganingizda,
                buyurtma berganingizda, axborot byulletenimizga obuna
                bo'lganingizda, so'rovnomaga javob berganingizda yoki forma
                to'ldirganingizda biz sizdan quyidagi ma'lumotlarni yig'ishimiz
                mumkin:
            </p>
            <ul className="mt-3">
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    Ism / Familya
                </li>
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    E-mail manzil
                </li>
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    Karta raqam
                </li>
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    Kod 
                </li>
            </ul>
            <h2 className=" text-3xl mt-10 capitalize">
                Biz to'plangan ma'lumotlardan qanday foydalanamiz?
            </h2>
            <p className="text-gray-700 mt-2">
                Sizdan to'plagan har qanday ma'lumot quyidagi usullardan birida
                ishlatilishi mumkin:
            </p>
            <ul className="mt-3">
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    Tajribangizni shaxsiylashtirish uchun (sizning
                    ma'lumotlaringiz shaxsiy ehtiyojlaringizga yaxshiroq javob
                    berishga yordam beradi)
                </li>
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    Xizmatimizni yaxshilash uchun (biz sizdan olgan ma'lumotlar
                    va fikr-mulohazalar asosida xizmat takliflarimizni doimiy
                    ravishda yaxshilashga intilamiz)
                </li>
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    Mijozlarga xizmat ko'rsatishni yaxshilash uchun (sizning
                    ma'lumotlaringiz mijozlarga xizmat ko'rsatish so'rovlari va
                    qo'llab-quvvatlash ehtiyojlariga yanada samarali javob
                    berishga yordam beradi)
                </li>
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    Tranzaktsiyalarni qayta ishlash uchun Tanlov, reklama,
                    so'rov yoki boshqa sayt funksiyalarini boshqarish uchun
                </li>
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    Davriy elektron pochta xabarlarini yuborish uchun
                </li>
            </ul>
            <h2 className=" text-3xl mt-10 capitalize">
                Biz to'plagan ma'lumotlarni uchinchi shaxslar bilan baham
                ko'ramizmi?
            </h2>
            <p className="text-gray-700 mt-2">
                Yo'q, biz hech qanday ma'lumotni uchinchi tomonlar bilan baham
                ko'rmaymiz.
            </p>
            <h2 className=" text-3xl mt-10 capitalize">
                Elektron pochta manzilingizdan qanday foydalanamiz?
            </h2>
            <div className="text-gray-700 mt-2">
                <p>
                    Xizmatimizga elektron pochta manzilingizni yuborish orqali
                    siz bizdan elektron pochta xabarlarini olishga rozilik
                    bildirasiz. Siz ushbu elektron pochta roʻyxatlaridan
                    istalgan vaqtda ishtirok etishni rad etish havolasini yoki
                    tegishli elektron pochtaga kiritilgan boshqa obunani bekor
                    qilish opsiyasini bosish orqali bekor qilishingiz mumkin.
                </p>
                <p className="mt-3">
                    Biz nomaqbul tijorat elektron pochta xabarlarini
                    yubormaymiz, chunki biz ham siz kabi spamdan nafratlanamiz.
                    Eslatma: agar siz elektron-xatlar obunasini bekor qilmoqchi
                    bo'lsangiz, biz har bir xatning pastgi qismida obunani bekor
                    qilish bo'yicha batafsil ko'rsatmalarni joylashtiramiz.
                </p>
            </div>
            <h2 className=" text-3xl mt-10 capitalize">
                To'plangan ma'lumotlar xavfsizmi?
            </h2>
            <p className="text-gray-700 mt-2">
                Biz sizning ma'lumotlaringiz xavfsizligini himoya qilish uchun
                barcha ehtiyot choralarini ko'ramiz. Bizda himoya qilish,
                ruxsatsiz kirishning oldini olish, maʼlumotlar xavfsizligini
                taʼminlash va maʼlumotlaringizdan toʻgʻri foydalanishga yordam
                beradigan jismoniy, elektron va boshqaruv tartib-qoidalari
                mavjud.{" "}
                <span>
                    Biroq, na odamlar, na xavfsizlik tizimlari, shu jumladan
                    shifrlash tizimlari ham ishonchli emas.
                </span>{" "}
                Bundan tashqari, odamlar qasddan jinoyat qilishlari yoki
                siyosatga rioya qilmasliklari mumkin. Biz sizning shaxsiy
                ma'lumotlaringizni himoya qilish uchun oqilona harakatlarni
                amalga oshirar ekanmiz, uning mutlaq xavfsizligini kafolatlay
                olmaymiz.
            </p>
            <h2 className=" text-3xl mt-10 capitalize">
                Ma'lumotlarimni yangilashim yoki tuzatishim mumkinmi?
            </h2>
            <p className="text-gray-700 mt-2">
                Siz o'zingizning noyob parolingiz va hisob qaydnomangiz
                ma'lumotlarining maxfiyligini har doim saqlash uchun
                javobgarsiz. Siz bizga taqdim etgan ma'lumotlarning har bir
                yozuvini tizimimizdan olib tashlash texnologik jihatdan mumkin
                emasligini bilishingiz kerak. Ma'lumotni tasodifiy yo'qotishdan
                himoya qilish uchun tizimlarimizni zaxiralash zarurati sizning
                ma'lumotlaringiz nusxasi o'chib bo'lmaydigan shaklda mavjud
                bo'lishi mumkinligini anglatadi, bu biz uchun topish qiyin yoki
                imkonsiz bo'ladi. Agar siz haqingizda mavjud bo'lgan har qanday
                ma'lumotni yangilash, o'chirish yoki olishni xohlasangiz, biz
                bilan bog'laning (kontakt malumotlar sahifa ohirida).
            </p>
            <h2 className=" text-3xl mt-10 capitalize">
                Ma'lumotlaringizni qancha vaqt saqlaymiz?
            </h2>
            <p className="text-gray-700 mt-2">
                Biz sizning ma'lumotlaringizni faqat sizga xizmat ko'rsatish va
                ushbu siyosatda tavsiflangan maqsadlarni amalga oshirish uchun
                kerak bo'lganda saqlaymiz. Maʼlumotlaringizdan foydalanishimiz
                kerak boʻlmasa va qonuniy yoki tartibga soluvchi
                majburiyatlarimizga muvofiq saqlashimiz shart boʻlmasa, biz
                ularni tizimlarimizdan olib tashlaymiz.
            </p>
            <h2 className=" text-3xl mt-10 capitalize">
                Ma'lumotlaringizni qanday himoya qilamiz?
            </h2>
            <p className="text-gray-700 mt-2">
                Buyurtma berganingizda yoki shaxsiy ma'lumotlaringizni
                kiritganingizda, yuborganingizda yoki platformaga kirishda
                ma'lumotlaringiz xavfsizligini ta'minlash uchun biz turli xil
                xavfsizlik choralarini qo'llaymiz. Biz xavfsiz serverdan
                foydalanamiz. Taqdim etilgan barcha nozik/kredit maʼlumotlari
                "Secure Socket Layer" (SSL) texnologiyasi orqali uzatiladi va
                keyin bizning toʻlov shlyuzi provayderlari maʼlumotlar bazasiga
                shifrlanadi, faqat bunday tizimlarga kirish uchun maxsus
                huquqlarga ega boʻlganlar foydalanishi mumkin va maʼlumotlar
                maxfiy saqlanishi talab qilinadi. Tranzaktsiyadan so'ng shaxsiy
                ma'lumotlaringiz hech qachon hech qanday faylda saqlanmaydi.
                Biroq, biz siz bizga uzatgan har qanday ma'lumotlarning mutlaq
                xavfsizligini ta'minlay olmaymiz yoki kafolatlay olmaymiz yoki
                Xizmatdagi ma'lumotlaringizga kirish, oshkor etilmasligi,
                o'zgartirilishi yoki yo'q qilinishiga kafolat bera olmaymiz.
            </p>
            <h2 className=" text-3xl mt-10 capitalize">Boshqaruv qonuni</h2>
            <p className="text-gray-700 mt-2">
                O‘zbekiston qonunlari, uning qonun normalari ziddiyati bundan
                mustasno, ushbu Shartnoma va sizning xizmatimizdan
                foydalanishingizni tartibga soladi. Sizning xizmatimizdan
                foydalanishingiz boshqa mahalliy, shtat, milliy yoki xalqaro
                qonunlarga ham tegishli bo'lishi mumkin. Sizning roziligingiz
                Xizmatimizdan foydalanish, hisob qaydnomasini ro'yxatdan
                o'tkazish yoki xarid qilish orqali siz ushbu Maxfiylik
                siyosatiga rozilik bildirasiz.
            </p>
            <h2 className=" text-3xl mt-10 capitalize">
                Boshqa veb-saytlarga havolalar
            </h2>
            <p className="text-gray-700 mt-2">
                Ushbu Maxfiylik siyosati faqat Xizmatlar uchun amal qiladi.
                Xizmatlar biz tomonidan boshqarilmaydigan yoki boshqarilmaydigan
                boshqa veb-saytlarga havolalarni o'z ichiga olishi mumkin. Biz
                bunday veb-saytlarda bildirilgan mazmun, aniqlik yoki fikrlar
                uchun javobgar emasmiz va bunday veb-saytlar biz tomonimizdan
                tekshirilmaydi, kuzatilmaydi. Yodda tutingki, siz xizmatlardan
                boshqa veb-saytga o‘tish uchun havoladan foydalanganingizda,
                bizning Maxfiylik siyosatimiz endi kuchga kirmaydi. Sizning
                boshqa veb-saytlarni ko'rib chiqishingiz va o'zaro aloqangiz,
                shu jumladan bizning platformamizda havolasi bo'lgan veb-saytlar
                o'sha veb-sayt qoidalari va siyosatlariga bo'ysunadi. Bunday
                uchinchi shaxslar siz haqingizda ma'lumot to'plash uchun
                o'zlarining cookie fayllari yoki boshqa usullardan
                foydalanishlari mumkin.
            </p>
            <h2 className=" text-3xl mt-10 capitalize">Cookie'lar</h2>
            <p className="text-gray-700 mt-2">
                Siz tashrif buyurgan veb-saytimizning hududlarini aniqlash uchun
                biz "cookie" lardan foydalanamiz. Cookie - bu veb-brauzeringiz
                tomonidan kompyuteringizda yoki mobil qurilmangizda saqlanadigan
                kichik ma'lumotlar. Biz veb-saytimizda ko'riladigan kontentni
                shaxsiylashtirish uchun cookie-fayllardan foydalanamiz. Ko'pgina
                veb-brauzerlar cookie-fayllardan foydalanishni o'chirib qo'yish
                uchun sozlanishi mumkin. Biroq, agar siz cookie-fayllarni
                o'chirib qo'ysangiz, veb-saytimizning funksiyalariga to'g'ri
                yoki umuman kira olmasligingiz mumkin. Biz hech qachon shaxsiy
                ma'lumotlarni cookie-fayllarga joylashtirmaymiz.
            </p>
            <h2 className=" text-3xl mt-10 capitalize">Toʻlov tafsilotlari</h2>
            <p className="text-gray-700 mt-2">
                Siz bizga taqdim etgan har qanday kredit karta yoki boshqa
                toʻlovni qayta ishlash tafsilotlariga kelsak, biz ushbu maxfiy
                maʼlumotlar imkon qadar xavfsiz tarzda saqlanishini oʻz
                zimmamizga olamiz.
            </p>
            <h2 className=" text-3xl mt-10 capitalize">Bolalar Maxfiyligi</h2>
            <p className="text-gray-700 mt-2">
                Biz 13 yoshga to'lmagan hech kimga murojaat qilmaymiz. Biz 13
                yoshga to'lmagan hech kimdan ataylab shaxsiy ma'lumotlarni
                yig'maymiz. Agar siz ota-ona yoki vasiy bo'lsangiz va
                farzandingiz bizga shaxsiy ma'lumotlarni taqdim etganidan
                xabardor bo'lsangiz, iltimos, bog'laning. Biz. Agar biz 13
                yoshga to'lmagan har qanday shaxsdan shaxsiy ma'lumotlarni
                ota-ona roziligisiz to'plaganimizdan xabardor bo'lsak, biz ushbu
                ma'lumotlarni serverlarimizdan olib tashlash choralarini
                ko'ramiz.
            </p>
            <h2 className=" text-3xl mt-10 capitalize">
                Maxfiylik siyosatimizga kiritilgan o'zgartirishlar
            </h2>
            <p className="text-gray-700 mt-2">
                Maxfiylik siyosatimizni o'zgartirishga qaror qilsak, biz ushbu
                o'zgarishlarni ushbu sahifaga joylashtiramiz va/yoki quyida
                Maxfiylik siyosatini o'zgartirish sanasini yangilaymiz. Uchinchi
                tomon xizmatlari Biz uchinchi tomon kontentini (jumladan,
                ma'lumotlar, ilovalar va boshqa mahsulotlar xizmatlari)
                ko'rsatishimiz, kiritishimiz yoki foydalanishga topshirishimiz
                yoki uchinchi tomon veb-saytlari yoki xizmatlariga havolalar
                berishimiz mumkin ("Uchinchi tomon xizmatlari"). Siz uchinchi
                tomon xizmatlari, jumladan, ularning aniqligi, to‘liqligi, o‘z
                vaqtidaligi, haqiqiyligi, mualliflik huquqiga muvofiqligi,
                qonuniyligi, odobliligi, sifati yoki boshqa jihatlari uchun
                javobgar emasligimizni tan olasiz va rozilik bildirasiz. Biz
                uchinchi tomon xizmatlari uchun siz yoki boshqa shaxs yoki
                yuridik shaxs oldida hech qanday javobgarlik yoki javobgarlikni
                o'z zimmamizga olmaymiz va bo'lmaydi. Uchinchi tomon xizmatlari
                va ularga havolalar faqat sizga qulaylik sifatida taqdim etiladi
                va siz ularga to'liq o'zingizning xavf-xataringiz ostida va
                uchinchi shaxslarning shartlari va shartlariga muvofiq
                kirishingiz va foydalanasiz.
            </p>
            <h2 className=" text-3xl mt-10 capitalize">
                Kuzatuv texnologiyalari:
            </h2>
            <ul className="mt-3">
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    <span className=" font-mono bg-gray-200 rounded-sm p-1">
                        localStorage
                    </span>
                    &nbsp; - ba'zan DOM xotirasi sifatida tanilgan mahalliy
                    xotira veb-ilovalarni mijoz ma'lumotlarini saqlash usullari
                    va protokollari bilan ta'minlaydi. Veb-xotira
                    cookie-fayllarga o'xshash doimiy ma'lumotlarni saqlashni
                    qo'llab-quvvatlaydi, lekin kattaroq sig'imga ega va HTTP
                    so'rovi sarlavhasida saqlanmaydi.
                </li>
                <li className="mt-3 list-disc text-gray-700 ml-8">
                    <span className="font-mono bg-gray-200 rounded-sm p-1">
                        sessionStorage
                    </span>
                    &nbsp; - bu sizning kompyuteringiz yoki mobil qurilmangizda
                    veb-brauzeringiz tomonidan saqlanadigan kichik hajmdagi
                    ma'lumotlar.
                </li>
            </ul>
            <h2 className=" text-3xl mt-10 capitalize">Biz bilan bog'laning</h2>
            <p className="text-gray-700 mt-2">
                Savollar, veb-saytdagi xato va kamchiliklar, yoki har qanday
                takliflar yuzasidan biz bilan bog'laning. Sizning har qanday
                yordamingiz ushbu loyiha kelajagi uchun juda zarur. Biz bilan
                bog'lanish uchun veb-saytdagi aloqa formasidan foydalanishingiz
                yoki xabarlaringizni to'g'ridan-to'g'ri quyidagi elektron pochta
                manziliga yuborishingiz mumkin:
                <ContactLink />
            </p>
            <CustomImageButton URL="/" icon={faArrowLeft} text="Bosh Sahifa" />
            &nbsp;&nbsp;
            <CustomImageButton
                URL="/privacy-policy?lang=en"
                icon={faLanguage}
                text="English"
            />
        </div>
    );
}
