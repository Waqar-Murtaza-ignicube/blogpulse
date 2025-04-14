import styled from "styled-components";

export const TickerContainer = styled.div.attrs({
    className: "flex justify-start items-center p-3 bg-black w-full text-white gap-5",
})``;
  
export const LeadArticleWrapper = styled.div.attrs({
    className: "flex flex-col gap-5 justify-start",
})``;

export const LeadArticleContainer = styled.div.attrs({
    className: "flex justify-center items-start gap-10",
})``;

export const LeadArticleHeading = styled.h2.attrs({
    className: "font-bold text-[120px] leading-[120px]",
})``;
  
export const ArticleMetaData = styled.div.attrs({
    className: "pt-3 space-y-7",
})``;

export const ArticleMetaDataWrapper = styled.div.attrs({
    className: "flex justify-between items-center",
})``;

export const ArticleMetaDataContainer = styled.div.attrs({
    className: "flex items-center justify-start gap-5",
})``;

export const ArticleMetaDataContentBlock = styled.div.attrs({
    className: "flex items-center justify-between gap-3",
})``;

export const ArticleMetaDataCategory = styled.div.attrs({
    className: "py-2 px-5 border border-black rounded-3xl",
})``;
