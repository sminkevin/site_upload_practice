import React from "react";
import ReactDOM from "react-dom";

// Includes all of material-components-web styles from the latest version
import "rmwc/dist/styles";

// import your components
import { Button } from "@rmwc/button";
import { Typography } from "@rmwc/typography";
import {
  DataTable,
  DataTableContent,
  DataTableHead,
  DataTableRow,
  DataTableHeadCell,
  DataTableBody,
  DataTableCell
} from "@rmwc/data-table";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton
} from "@rmwc/dialog";

function Sandbox() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  return (
    <React.Fragment>
      <Typography use="headline4">이승민의 서버</Typography>
      <Typography use="subtitle1" tag="p">
        내가 팝캣에 대해 설명해줄게!
      </Typography>
      <Typography use="body1">
        <ul>
          <li>
            <a href="https://www.instagram.com/oatmealpopcat">
              팝캣 인스타그램 계정
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=xFb_JD3_0Pk&ab_channel=%EC%82%AC%ED%83%84%ED%98%95%EC%A0%9C ">
              팝캣은 팝팝거리는 고양이야
            </a>
          </li>
        </ul>
      </Typography>
      <DataTable>
        <DataTableContent>
          <DataTableHead>
            <DataTableRow>
              <DataTableHeadCell>고양이 종류</DataTableHeadCell>
              <DataTableHeadCell alignEnd>개체 수</DataTableHeadCell>
              <DataTableHeadCell alignEnd>가격</DataTableHeadCell>
            </DataTableRow>
          </DataTableHead>
          <DataTableBody>
            <DataTableRow>
              <DataTableCell>길 고양이</DataTableCell>
              <DataTableCell alignEnd>11,6019</DataTableCell>
              <DataTableCell alignEnd>
                <Dialog
                  open={open1}
                  onClose={(evt) => {
                    console.log(evt.detail.action);
                    setOpen1(false);
                  }}
                  onClosed={(evt) => console.log(evt.detail.action)}
                >
                  <DialogTitle>길 고양이 가격</DialogTitle>
                  <DialogContent>길 고양이는 살 수 없어요!</DialogContent>
                  <DialogActions>
                    <DialogButton action="close">취소</DialogButton>
                    <DialogButton action="accept" isDefaultAction>
                      확인
                    </DialogButton>
                  </DialogActions>
                </Dialog>
                <Button raised onClick={() => setOpen1(true)}>
                  알아보기
                </Button>
              </DataTableCell>
            </DataTableRow>
            <DataTableRow selected>
              <DataTableCell>집 고양이</DataTableCell>
              <DataTableCell alignEnd>많고 많음</DataTableCell>
              <DataTableCell alignEnd>
                <Dialog
                  open={open2}
                  onClose={(evt) => {
                    console.log(evt.detail.action);
                    setOpen2(false);
                  }}
                  onClosed={(evt) => console.log(evt.detail.action)}
                >
                  <DialogTitle>집 고양이 가격</DialogTitle>
                  <DialogContent>집 고양이는 살 수 없어요!</DialogContent>
                  <DialogActions>
                    <DialogButton action="close">취소</DialogButton>
                    <DialogButton action="accept" isDefaultAction>
                      확인
                    </DialogButton>
                  </DialogActions>
                </Dialog>
                <Button raised onClick={() => setOpen2(true)}>
                  알아보기
                </Button>
              </DataTableCell>
            </DataTableRow>
            <DataTableRow>
              <DataTableCell>팝캣</DataTableCell>
              <DataTableCell alignEnd>1</DataTableCell>
              <DataTableCell alignEnd>
                <Dialog
                  open={open3}
                  onClose={(evt) => {
                    console.log(evt.detail.action);
                    setOpen3(false);
                  }}
                  onClosed={(evt) => console.log(evt.detail.action)}
                >
                  <DialogTitle>팝캣 가격</DialogTitle>
                  <DialogContent>팝캣은 살 수 없어요!</DialogContent>
                  <DialogActions>
                    <DialogButton action="close">취소</DialogButton>
                    <DialogButton action="accept" isDefaultAction>
                      확인
                    </DialogButton>
                  </DialogActions>
                </Dialog>
                <Button raised onClick={() => setOpen3(true)}>
                  알아보기
                </Button>
              </DataTableCell>
            </DataTableRow>
          </DataTableBody>
        </DataTableContent>
      </DataTable>
      <br />
      <br />
      <img src="테스트.jpg" width="300" />
    </React.Fragment>
  );
}

// ...
ReactDOM.render(
  <React.Fragment>
    <style>{`
      body {
        font-family: sans-serif;
        padding: 1rem;
      }
    `}</style>
    <Sandbox />
  </React.Fragment>,
  document.getElementById("root")
);
