import styled from 'styled-components';

export const StyledContainerFlex = styled.div`
 display: flex;
 flex-direction: row;
 align-items: flex-start;
 flex-wrap: wrap;
 flex: auto;
 justify-content: flex-start;
`;

export const StyledContainerGrid = styled.section`
 display: grid;
`;

export const StyledItemFlex = styled.div`
 flex: auto;
 align-self: center;
`;

export const ImageContainer1 = styled.section`
 padding: 0;
 object-fit: contain;
`;

interface StyledContainerImageProps {
 zMin?: string;
}

export const StyledContainerImage = styled(ImageContainer1)`
 z-index: ${(props: StyledContainerImageProps) => (props.zMin ? '-1' : 'auto')};
 position: relative;
 text-align: center;
 display: block;
`;
