"use client"
import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const Whatsapp = () => {
    return (
        <WhatsAppWidget
            phoneNo="+254793474747"
            position="right"
            widgetWidth="300px"
            widgetWidthMobile="260px"
            autoOpen={true}
            autoOpenTimer={5000}
            messageBox={true}
            messageBoxTxt="Hi, When can we schedule a call ?"
            iconSize="60"
            iconColor="white"
            iconBgColor="green"
            headerIcon="/logo.png"
            headerIconColor="pink"
            headerTxtColor="white"
            headerBgColor="#003585"
            headerTitle="Adm - Smartbrains Kenya"
            headerCaption="Online"
            bodyBgColor="white"
            chatPersonName="Smartbrains Kenya"
            chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
            footerBgColor="white"
            placeholder="Type a message.."
            btnBgColor="#0099FF"
            btnTxt="Start Chat"
            btnTxtColor="white"
        />
    );
};

export default Whatsapp;