import { useEffect, useState } from "react";
import QuestionCard, { QuestionType } from "../components/QuestionCard";
import questions from "../questions.json";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TOTAL_QUESTIONS = questions.length;

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0].id);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  function handleNextButtonClick(index: number) {
    if (index === TOTAL_QUESTIONS - 1) {
      navigate("/results");
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  }

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        questions.map(
          (question, index) =>
            currentQuestion === question.id && (
              <Box key={question.id}>
                <Typography variant="h3">Question: {index + 1}</Typography>
                <Box
                  height="500px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <QuestionCard
                    id={question.id}
                    question={question.question}
                    questionType={question.questionType as QuestionType}
                    answers={question.answerOptions}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      disabled={index === 0}
                      onClick={() => setCurrentQuestion((prev) => prev - 1)}
                    >
                      Previous
                    </Button>

                    <Button onClick={() => handleNextButtonClick(index)}>
                      {index === TOTAL_QUESTIONS - 1 ? "Submit" : "Next"}
                    </Button>
                  </Box>
                </Box>
              </Box>
            )
        )
      )}
    </Box>
  );
};

export default Questions;
