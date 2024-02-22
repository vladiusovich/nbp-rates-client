import styled from "styled-components";
import typography from "@typography";
import fonts from "@mixins";

const S = {
	small: styled(typography.small)`
		${fonts.gray};
	`,
};

export default S;