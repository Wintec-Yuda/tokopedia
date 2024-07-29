import { IoIosPhonePortrait, IoIosSearch, IoIosArrowDown, IoMdStar } from "react-icons/io";
import { IoCartOutline, IoCheckbox } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import mclarenImage from '../public/mclaren.jpg'

const listHeaders = ['Tentang Tokopedia', 'Mitra Tokopedia', 'Mulai Berjualan', 'Promo', 'Tokopedia Care']
const listTypes = ['Bear Brand Susu Beruang', 'Iphone 12 Pro', 'Susu Bear Brand', 'S26 Promise', 'S26 Promil Ultima', 'S26 Promil Gold 1']

const items = Array(48).fill({
  image: mclarenImage,
  title: 'McLaren Senna - Our Fastest Track-Focused Road Hypercar',
  price: '$1,250,000.00',
  seller: 'Nakamart',
  rating: '5.0 | 250+ terjual'
});

function App() {
  return (
    <main>
      <header className="space-y-2 border-b border-gray-200 pb-2 sticky top-0 bg-white">
        <section className="bg-gray-200 py-1 px-8 flex justify-between text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <IoIosPhonePortrait />
            <span className="hover:text-green-500 cursor-pointer">Download tokopedia App</span>
          </div>
          <ul className="flex gap-6">
            {listHeaders.map((item, index) => <li key={index} className="hover:text-green-500 cursor-pointer">{item}</li>)}
          </ul>
        </section>
        <section className="py-1 px-8 flex justify-between items-center">
          <h1 className="text-3xl text-green-600">tokopedia</h1>
          <p className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">Kategori</p>
          <div className="w-2/3 border p-2 rounded">
            <IoIosSearch size={25} className="absolute ml-2 text-gray-400" />
            <input type="text" placeholder="Cari di tokopedia" className="w-full pl-10 focus:outline-none" />
          </div>
          <div className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <IoCartOutline size={25} className="text-gray-800" />
          </div>
          <div className="flex gap-2">
            <button className="text-green-600 px-3 py-1 rounded border border-green-600 font-semibold">Masuk</button>
            <button className="bg-green-600 text-white px-3 py-1 rounded font-semibold">Daftar</button>
          </div>
        </section>
        <section className="flex ps-[19rem] pe-8">
          <ul className="flex gap-6">
            {listTypes.map((item, index) => <li key={index} className="hover:text-green-500 text-gray-500 cursor-pointer text-sm">{item}</li>)}
          </ul>
          <div className="flex gap-1 items-center ms-auto">
            <SlLocationPin size={15} />
            <div className="flex items-center gap-1 cursor-pointer">
              <p>Dikirim ke <span className="font-semibold">Jakarta Pusat</span></p>
              <IoIosArrowDown size={15} />
            </div>
          </div>
        </section>
      </header>
      <main className="px-52 py-10">
        <div className="flex gap-4">
          <div className="px-1 py-2 rounded-lg bg-gradient-to-r from-pink-800 to-pink-400 w-52 h-16">
            <span className="text-white font-semibold">For You</span>
          </div>
          <div className="px-1 py-2 rounded-lg bg-gradient-to-r from-yellow-800 to-yellow-400 w-52 h-16">
            <span className="text-white font-semibold">Audio</span>
          </div>
          <div className="px-1 py-2 rounded-lg bg-gradient-to-r from-green-800 to-green-400 w-52 h-16">
            <span className="text-white font-semibold">Dekorasi</span>
          </div>
          <div className="px-1 py-2 rounded-lg bg-gradient-to-r from-pink-800 to-pink-400 w-52 h-16">
            <span className="text-white font-semibold">Kue</span>
          </div>
          <div className="px-1 py-2 rounded-lg bg-gradient-to-r from-teal-800 to-teal-400 w-52 h-16">
            <span className="text-white font-semibold">Mirip yang kamu cek</span>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-2 py-4">
          {items.map((item, index) => (
            <div key={index} className="border rounded-md">
              <img src={item.image} alt="McLaren" className="rounded-tl-lg rounded-tr-lg" />
              <div className="p-2 text-sm space-y-1">
                <p className="leading-tight">{item.title}</p>
                <p className="font-semibold">{item.price}</p>
                <div className="flex items-center gap-1 text-gray-500">
                  <IoCheckbox className="text-purple-500" />
                  <span>{item.seller}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <IoMdStar className="text-yellow-500" />
                  <span>{item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </main>
  )
}

export default App
