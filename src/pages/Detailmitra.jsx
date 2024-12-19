import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "../assets/about0.png";

function Detailmitra() {
  const navigate = useNavigate();

  return (
    <div className="mt-[100px] flex flex-col items-center">
      {/* Bagian Header Gambar */}
      <div className="relative w-full flex justify-center">
        {/* Button Back */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-2 left-32 text-[#EE9F26] text-3xl hover:text-[#e57d2b] transition duration-300"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* Gambar Utama */}
        <img
          src={Image}
          alt="Header"
          className="w-full max-w-[1150px] rounded-3xl"
        />
      </div>

      {/* Bingkai Konten */}
      <div className="mt-8 mb-8 border-4 border-[#E34A2B] px-8 py-6 w-full max-w-[1150px] rounded-3xl">
        {/* Judul */}
        <h1 className="text-[#EE9F26] text-4xl font-bold text-left mt-9">
          Berminat menjadi bagian dari{" "}
          <span className="text-[#275A53]">EnergiKu</span>?
        </h1>
        <h2 className="text-[#EE9F26] text-2xl font-bold text-left mt-4 mb-6">
          Isi formulir berikut:
        </h2>

        {/* Formulir */}
        <form className="flex flex-col gap-6">
          {/* Nama Pendaftar */}
          <label className="text-gray-700 text-xl font-semibold">
            Nama Pendaftar:
            <input
              type="text"
              className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E34A2B]"
              placeholder="Masukkan nama Anda"
            />
          </label>

          {/* Nama Perusahaan/Instansi */}
          <label className="text-gray-700 text-xl font-semibold">
            Nama Perusahaan/Instansi:
            <input
              type="text"
              className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E34A2B]"
              placeholder="Masukkan nama perusahaan/instansi"
            />
          </label>

          {/* Nomor HP/Email */}
          <label className="text-gray-700 text-xl font-semibold">
            No. Hp / Email:
            <input
              type="text"
              className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E34A2B]"
              placeholder="Masukkan nomor HP atau email"
            />
          </label>

          {/* Jenis Bio Energi yang Diproduksi */}
          <label className="text-gray-700 text-xl font-semibold">
            Jenis Bio Energi yang Diproduksi:
            <input
              type="text"
              className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E34A2B]"
              placeholder="Masukkan jenis bio energi"
            />
          </label>

          {/* Jenis Limbah yang Dibutuhkan */}
          <label className="text-gray-700 text-xl font-semibold">
            Jenis Limbah yang Dibutuhkan:
            <input
              type="text"
              className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E34A2B]"
              placeholder="Masukkan jenis limbah"
            />
          </label>

          {/* Banyak Limbah yang Dibutuhkan */}
          <label className="text-gray-700 text-xl font-semibold">
            Banyak Limbah yang Dibutuhkan:
            <div className="flex flex-col sm:flex-row gap-4 mt-2 items-center">
              <input
                type="number"
                className="w-full sm:w-40 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E34A2B]"
                placeholder="kg/L"
              />
              <input
                type="text"
                className="w-full sm:w-64 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E34A2B]"
                placeholder="minggu/bulan/tahun"
              />
            </div>
          </label>

          {/* Button */}
          <div className="flex justify-center sm:justify-end">
            <button
              type="submit"
              className="w-full sm:w-auto max-w-[150px] py-3 bg-[#EE9F26] text-white font-bold text-sm px-6 rounded-lg hover:bg-[#e57d2b] transition duration-300"
            >
              Bergabung
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Detailmitra;
