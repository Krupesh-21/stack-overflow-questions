import React, { useState } from "react";
import xss from "xss";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "0.6px solid #333",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: "80vw",
    maxHeight: "80vh",
    overflow: "scroll",
  },
}));

function QuestionModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(props.modalOpen);

  const handleClose = () => {
    setOpen(props.modalOpen);
    props.handleQuestionModal(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
              <a
                href={props.questionData.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.questionData.title}
              </a>
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: xss(props.questionData.body) }}
              id="transition-modal-description"
            ></div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default QuestionModal;
