import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
        username,
        password
      });

      // Store the token in localStorage
      localStorage.setItem("token", response.data.token);

      // Navigate to the dashboard
      navigate("/dashboard");
    } catch (error) {
      // Handle error response from server
      if (error.response && error.response.status === 411) {
        console.error("Sign-in failed: Incorrect inputs or credentials", error.response.data.message);
        // Optionally, show an error message to the user
      } else {
        console.error("Sign-in failed", error);
        // Handle other potential errors (e.g., network issues)
      }
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            placeholder="harkirat@gmail.com"
            label={"Email"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputBox
            placeholder="123456"
            label={"Password"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="pt-4">
            <Button
              onClick={handleSignin}
              label={"Sign in"}
            />
          </div>
          <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  )
}
