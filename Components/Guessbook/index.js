import { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../Config/api";

import Swal from "sweetalert2";

import styles from "./Guessbook.module.css";
import { Spinner } from "react-bootstrap";

import Image from "next/image";

import { Fade, Slide } from "react-awesome-reveal";

const Guessbook = () => {
  const [wish, setWish] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    wishes: "",
    ip: "",
  });

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setForm({
      ...form,
      ip: res.data.IPv4,
    });
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  const { name, wishes, ip } = form;

  const loadWishes = async () => {
    try {
      setLoading(true);

      const responseWishes = await API.get("/wishes");

      const res = responseWishes?.data?.data?.wishes;

      setWish(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // alert(wishes);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({
        name,
        wishes,
        ip,
      });

      setForm({
        ...form,
        name: "",
        wishes: "",
      });
      Swal.fire({
        title: "Are you sure?",
        text: "Apakah anda yakin ingin mengirimnya?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, kirim!",
      }).then(async (result) => {
        try {
          if (result.isConfirmed) {
            const res = await API.post("/wish/add", body, config);

            const newWish = res.data.data.addWish;

            setWish([...wish, newWish]);

            Swal.fire("Success!", "Terima Kasih Atas Ucapannya.", "success");
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Anda Sudah Mengirikan Wish!`,
          });
        }
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Anda Sudah Mengirim Wish.
        Terima kasih!`,
      });
    }
  };

  useEffect(() => {
    loadWishes();
  }, []);

  return (
    <>
      <div className={styles.section}>
        <Fade cascade triggerOnce>
          <h1 className={styles.h1}>Guess Book</h1>
          <h5 className={styles.h5}>Leave a Message / Wishes for us…</h5>
          <a href="#wish">
            <button className={styles.button}>
              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Image src="/Assets/chat.svg" width={24} height={24} /> Write
                you wish..
              </div>
            </button>
          </a>
        </Fade>

        <hr
          style={{
            border: "1px solid #fb908b",
            marginBottom: "40px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {loading ? (
            <div>
              <Spinner animation="grow" variant="danger" />
            </div>
          ) : (
            wish.map((e) => (
              <Slide cascade delay={300} triggerOnce>
                <div className={styles["wish-card"]}>
                  <h4 className={styles.h4}>{e.name}</h4>
                  <p className={styles.p}>{e.wishes}</p>
                </div>
              </Slide>
            ))
          )}
        </div>

        {/* form Wishes */}

        <div className={styles.input}>
          <form onSubmit={(e) => onSubmit(e)} id="wish" className={styles.form}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              placeholder="Nama"
              className={styles["input-text"]}
            />
            <textarea
              name="wishes"
              value={wishes}
              onChange={(e) => onChange(e)}
              rows="2"
              placeholder="Write a message.."
              className={styles["input-textarea"]}
            />
            <input
              type="submit"
              className={styles["input-submit"]}
              value="Kirim"
              disabled={!name || !wishes ? true : false}
            ></input>
            {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Guessbook;
