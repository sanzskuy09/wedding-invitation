import { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../Config/api";

import Swal from "sweetalert2";

import styles from "./RSVP.module.css";

import { Fade } from "react-awesome-reveal";

const RVSP = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    is_come: "",
    ip: "",
  });

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    // console.log(res.data);
    setForm({
      ...form,
      ip: res.data.IPv4,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const { name, address, is_come, ip } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({
        name,
        address,
        is_come,
        ip,
      });

      Swal.fire({
        title: "Are you sure?",
        text: "Apakah data anda sudah benar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, sudah!",
      }).then(async (result) => {
        try {
          if (result.isConfirmed) {
            const response = await API.post("/users/add", body, config);

            setForm({
              ...form,
              name: "",
              address: "",
              is_come: "",
            });

            Swal.fire(
              "Success!",
              "Terima Kasih Atas Konfirmasinya.",
              "success"
            );
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Maaf, Anda Sudah Konfirmasi!",
          });
        }
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Anda Sudah Konfirmasi!",
      });
    }
  };

  return (
    <>
      <div className={styles.section}>
        <Fade cascade triggerOnce>
          <h1 className={styles.h1}>RSVP</h1>
          <p className={styles.p}>
            Kami tidak sabar menunggu hari pernikahan kami bersama
            Bapak/Ibu/Saudara/i, mohon konfirmasi kehadiran Bapak/Ibu/Saudara/i.
            Terima kasih.
          </p>
        </Fade>
        <div className={styles.input}>
          <form onSubmit={(e) => onSubmit(e)} className={styles.form}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              placeholder="Nama Lengkap"
              className={styles["input-text"]}
            />
            <textarea
              name="address"
              value={address}
              onChange={(e) => onChange(e)}
              rows="2"
              placeholder="Alamat"
              className={styles["input-textarea"]}
            />
            <select
              name="is_come"
              value={is_come}
              onChange={(e) => onChange(e)}
              id="absen"
              className={styles["input-select"]}
            >
              <option defaultValue="Apakah anda akan hadir?">
                Apakah anda akan hadir?
              </option>
              <option value="present">Iya, bisa</option>
              <option value="absent">Maaf, tidak bisa!</option>
            </select>
            <input
              type="submit"
              value="Submit"
              className={styles["input-submit"]}
              disabled={!name || !address || !is_come ? true : false}
            ></input>
            {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default RVSP;
