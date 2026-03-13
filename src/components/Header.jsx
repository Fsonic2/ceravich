export default function Header() {
   
    return (
   <div
  className="container-fluid px-5 py-5 mt-5 text-white"
  style={{
    backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/header.png')",
    backgroundPosition: "center",
    minHeight: "300px"
  }}
>
 <h1
  className="fw-bold pt-5 px-5"
  style={{ marginTop: "50px" }}
>
  Fragrance
</h1>
</div>

    )
}