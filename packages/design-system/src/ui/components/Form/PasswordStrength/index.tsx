import PasswordStrengthBar from "react-password-strength-bar";

interface PasswordStrengthProps {
  password: string;
  shortScoreWord?: string;
  minLength?: number;
  className?: string;
  scoreWords?: string[];
}

function PasswordStrength({
  password,
  shortScoreWord,
  scoreWords,
  minLength = 6,
}: PasswordStrengthProps) {
  return (
    <PasswordStrengthBar
      password={password}
      shortScoreWord={
        shortScoreWord || "A senha precisa ter 6 carateres ou mais"
      }
      minLength={minLength}
      className="strength-bar"
      // barColors={ [
      // 	colors['@gray'][300],
      // 	colors['@error'],
      // 	colors['@warning'],
      // 	colors['@blue'][500],
      // 	colors['@green'][500],
      // ]}
      scoreWordClassName="strength-bar-word"
      scoreWordStyle={{
        textAlign: password.length >= minLength ? "right" : "left",
      }}
      scoreWords={
        scoreWords || ["Muito fraca", "Fraca", "Média", "Boa", "Forte"]
      }
    />
  );
}

export { PasswordStrength };
