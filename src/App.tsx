import { IoIosPhonePortrait, IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

const listHeaders = ['Tentang Tokopedia', 'Mitra Tokopedia', 'Mulai Berjualan', 'Promo', 'Tokopedia Care']
const listTypes = ['Bear Brand Susu Beruang', 'Iphone 12 Pro', 'Susu Bear Brand', 'S26 Promise', 'S26 Promil Ultima', 'S26 Promil Gold 1']

function App() {
  return (
    <main>
      <header className="space-y-2 border-b border-gray-200 pb-2 sticky">
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
      <main className="px-96">

      </main>
    </main>
  )
}

export default App
