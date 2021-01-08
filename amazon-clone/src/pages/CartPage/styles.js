import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  base: { padding: "0 8px" },
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    boxShadow: "none",
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  orderDetail: {
    backgroundColor: "#fff !important",
    borderRadius: 4,
    marginTop: theme.spacing(1.5),
  },
}));
