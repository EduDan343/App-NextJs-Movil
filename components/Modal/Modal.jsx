import React from "react";

const Modal = () => {
  {
    /* <button
      className="botoncomprar2"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      Comprar
    </button> */
  }
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog ">
        <div className="modal-content bg-dark">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel"
                style={{color: 'white', textAlign: 'center'}}
            >
              ¡Modal carousel!
            </h5>
            <button
              type="button"
              className="btn-close bg-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row align-items-start">
              <div className="col-12">
                <p style={{color: 'white', textAlign: 'center'}}>
                    Ventana Modal!!!
                </p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>

            {/* <button
              type="button"
              class="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropcheck"
            >
              Ir al Carrito
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
