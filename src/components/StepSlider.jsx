import { useEffect, useMemo, useState } from "react";

export default function StepSlider() {
  const steps = [
    {
      id: 1,
      title: "First Step",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "#27d3d3",
      icon: "bi bi-currency-bitcoin",
    },
    {
      id: 2,
      title: "Second Step",
      desc: "Download and organize your files with ease.",
      color: "#69e36f",
      icon: "bi bi-cloud-arrow-down",
    },
    {
      id: 3,
      title: "Third Step",
      desc: "Manage your workflow and process items quickly.",
      color: "#ff7a6e",
      icon: "bi bi-music-note-beamed",
    },
    {
      id: 4,
      title: "Fourth Step",
      desc: "Complete the final process and submit results.",
      color: "#c43be3",
      icon: "bi bi-person",
    },
    {
      id: 5,
      title: "Fifth Step",
      desc: "Track your progress from one point to another.",
      color: "#0dcaf0",
      icon: "bi bi-graph-up",
    },
    {
      id: 6,
      title: "Sixth Step",
      desc: "Create reports and monitor performance easily.",
      color: "#fd7e14",
      icon: "bi bi-file-earmark-text",
    },
    {
      id: 7,
      title: "Seventh Step",
      desc: "Review all data before final approval.",
      color: "#20c997",
      icon: "bi bi-check2-square",
    },
    {
      id: 8,
      title: "Eighth Step",
      desc: "Finish the process and archive the record.",
      color: "#6f42c1",
      icon: "bi bi-archive",
    },
  ];

  const itemsPerPage = 4;
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredSteps = useMemo(() => {
    return steps.filter(
      (step) =>
        step.title.toLowerCase().includes(search.toLowerCase()) ||
        step.desc.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const totalPages = Math.ceil(filteredSteps.length / itemsPerPage);

  const paginatedSteps = useMemo(() => {
    const pages = [];
    for (let i = 0; i < filteredSteps.length; i += itemsPerPage) {
      pages.push(filteredSteps.slice(i, i + itemsPerPage));
    }
    return pages;
  }, [filteredSteps]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  useEffect(() => {
    if (totalPages <= 1) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
  };

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control form-control-lg shadow-sm"
            placeholder="Search steps..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {filteredSteps.length > 0 ? (
        <>
          <div className="position-relative">
            <div className="row g-4 justify-content-center">
              {paginatedSteps[currentPage - 1]?.map((step) => (
                <div className="col-lg-3 col-md-6" key={step.id}>
                  <div className="step-card-wrapper mx-auto">
                    <div className="step-bar"></div>

                    <div
                      className="step-card text-center text-white shadow"
                      style={{ backgroundColor: step.color }}
                    >
                      <i className={`${step.icon} fs-1 mb-3`}></i>
                      <h4 className="fw-bold">{step.title}</h4>
                      <p className="mb-0 small">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="d-flex justify-content-center gap-3 mt-4">
                <button className="btn btn-dark" onClick={prevPage}>
                  Prev
                </button>
                <button className="btn btn-dark" onClick={nextPage}>
                  Next
                </button>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <nav className="mt-4">
              <ul className="pagination justify-content-center flex-wrap">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index + 1}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => goToPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </>
      ) : (
        <div className="text-center py-5">
          <h5 className="text-muted">No result found</h5>
        </div>
      )}

      <style>{`
        .step-card-wrapper {
          position: relative;
          width: 100%;
          max-width: 260px;
          height: 280px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 35px;
        }

        .step-bar {
          position: absolute;
          top: 10px;
          width: 180px;
          height: 16px;
          background: linear-gradient(90deg, #999, #ddd, #999);
          border-radius: 20px;
          z-index: 1;
        }

        .step-card {
          position: relative;
          z-index: 2;
          width: 220px;
          min-height: 220px;
          padding: 30px 18px 25px;
          border-radius: 0 0 22px 22px;
          clip-path: polygon(10% 0, 90% 0, 100% 12%, 100% 100%, 0 100%, 0 12%);
          transition: transform 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-6px);
        }
      `}</style>
    </div>
  );
}