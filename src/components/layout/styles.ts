import styled from "styled-components";

export const NavBlock = styled.nav.attrs({
    className: "flex justify-between items-center pb-4 p-8",
})``;

export const LogoBlock = styled.div.attrs({
    className: "text-3xl font-medium",
})``;

export const NavLinks = styled.nav.attrs({
    className: "flex justify-between gap-4 items-center list-none",
})``;

export const FooterWrapper = styled.footer.attrs({
    className: "footer p-8 bg-black text-white flex flex-col gap-20",
})``;

export const FormWrapper = styled.div.attrs({
    className: "flex items-center justify-between",
})``;

export const FormHeading = styled.h2.attrs({
    className: "text-6xl font-bold",
})``;

export const FooterLinksWrapper = styled.div.attrs({
    className: "flex justify-start space-x-72",
})``;

export const FooterLinksListWrapper = styled.ul.attrs({
    className: "flex flex-col justify-between gap-4 items-start text-gray-400",
})``;

export const FooterBelowWrapper = styled.div.attrs({
    className: "flex justify-between items-center",
})``;

export const FooterBelowListWrapper = styled.ul.attrs({
    className: "flex justify-between gap-4",
})``;

