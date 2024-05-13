import { CardText, CardTitle, StyledCard } from '../card/Card';
import { CustomLink } from '../../../../componets/icon/CustomLink';

export const CustomCard = () => {
  return (
    <StyledCard>
      <CardTitle>advertising</CardTitle>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
        diam in ac dictum a urna viverra morbi.
      </CardText>
      <CustomLink href="#" text="ORDER NOW" />
    </StyledCard>
  );
};
