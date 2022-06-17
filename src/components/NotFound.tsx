import { Styled404Link } from "./StyledComponents.tsx/Link";
import { Styled404Paragraph } from "./StyledComponents.tsx/Paragraphs";
import { NotFoundWrapper } from "./StyledComponents.tsx/Wrappers";

export const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Styled404Paragraph>Oh no 404..! Page not found.</Styled404Paragraph>
      <p>
        <Styled404Link to="/">
          Click here to get back to Home Page
        </Styled404Link>
      </p>
    </NotFoundWrapper>
  );
};
