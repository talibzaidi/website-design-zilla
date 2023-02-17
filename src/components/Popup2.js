import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Popup2(props) {
  return (
    <Modal
      show={props.visibility}
      onHide={props?.handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="ReactModal__Html--open"
      dialogClassName="ReactModal__Html--open"
      autoFocus={false}
      // htmlOpenClassName="ReactModal__Html--open"
      style={{ position: "fixed", overflowY: "hidden" }}
      // onBackdropClick={props?.handleClose}
    >
      <Modal.Header style={{ justifyContent: "center", borderWidth: 0 }}>
        <Modal.Title>
          <img
            src={
              "https://images.squarespace-cdn.com/content/v1/631041e0d4169734467959ef/daa07a92-31e8-4af0-ad9e-156e86029e8e/Group.png?format=1000w"
            }
            alt="sortd"
            style={{ width: "85px", height: "20px" }}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{}}>Download the app to continue</Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondory" onClick={props?.handleClose}>
          Close
        </Button> */}
        <Button
          variant=""
          onClick={props?.handleDownload}
          style={{
            backgroundColor: "#FF6541",
            border: "1px solid FF6541",
            color: "#fff",
          }}
        >
          Download App
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
