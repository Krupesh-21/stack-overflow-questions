import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import QuestionListTable from "./QuestionListTable";
import QuestionModal from "./QuestionModal";

const page_no = 1;

function App() {
  const [page, setPage] = useState(page_no);
  const [tableData, setTableData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  function modalOpen(modal) {
    setIsOpen(modal);
  }

  function updateModal(data) {
    setModalData(data);
  }

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          `https://api.stackexchange.com/2.2/questions?page=${page}&pagesize=30&order=desc&sort=activity&site=stackoverflow&filter=!FR)86FXqzw8xGYc1(VYsy_eZr7Vh5gICSvKCG0iCVobu*fMnfi3wcTv*.lfK9Bj-4)hi7D9u`
        )
        .then((res) => {
          if (res.data && !res.data.has_more) {
            setHasMore(false);
          }

          if (res.data.items && res.data.items.length > 0) {
            setTableData((prevTableData) => {
              return [...prevTableData, ...res.data.items];
            });
          }
        })
        .catch((err) => console.error(err));
    }
    fetchData();
  }, [page]);

  function scrollToEnd() {
    setPage(page + 1);
  }

  window.onscroll = () => {
    if (
      hasMore &&
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };
  return (
    <>
      <Header />
      <QuestionListTable
        handleQuestionModal={modalOpen}
        questions={tableData}
        modalData={updateModal}
      />
      {isOpen && (
        <QuestionModal
          handleQuestionModal={modalOpen}
          modalOpen={isOpen}
          questionData={modalData}
        />
      )}
    </>
  );
}

export default App;
