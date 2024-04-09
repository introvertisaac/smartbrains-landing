"use client"
import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const Whatsapp = () => {
    return (
        <WhatsAppWidget
            phoneNo="+254793474747"
            position="right"
            widgetWidth="500px"
            widgetWidthMobile="260px"
            autoOpen={true}
            autoOpenTimer={5000}
            messageBox={true}
            messageBoxTxt="Hi, When can we schedule a call ?"
            iconSize="60"
            iconColor="white"
            iconBgColor="green"
            headerIcon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZjjBC_8lg9zhTA_H9gg71mZB3e4OWi-SXNi91Kgek4A&s"
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