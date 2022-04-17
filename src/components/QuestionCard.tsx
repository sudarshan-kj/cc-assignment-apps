import logo from "./logo.svg";
import "./App.css";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

type QuestionCardProps = {
  question: String;
  questionType: String;
  answers: Array<String>;
};

function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Box>
      <Typography>Question:</Typography>
      <Typography>{question}</Typography>
    </Box>
  );
}

export default QuestionCard;
