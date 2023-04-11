package com.kafka472.kafkachatbackend.model;

public class Message{
    private String From;
    private String message;
    private String timestamp;

    public Message(){
    }
    public String getFrom() {
        return From;
    }
    public void setFrom(String from) {
        From = from;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public String getTimestamp() {
        return timestamp;
    }
    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }
    //constructor stores from & message to the private variables
    public Message(String from, String message) {
        From = from;
        this.message = message;
    }

    @Override
    public String toString(){
        return "Message{" + "From='" + From + '\'' +
                ", message='" + message + '\'' +
                ", timestamp='" + timestamp+ '\'' + 
                '}';
    }

    
   

}