package com.kafka472.kafkachatbackend.model;

public class Message{
    private String from;
    private String message;
    private String timestamp;

    public Message(){
    }
    public String getFrom() {
        return from;
    }
    public void setFrom(String from) {
        this.from = from;
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
        this.from = from;
        this.message = message;
    }

    public Message(String from, String message, String timestamp) {
        this.from = from;
        this.message = message;
        this.timestamp = timestamp;
    }

    @Override
    public String toString(){
        return "Message{" + "From='" + this.from + '\'' +
                ", message='" + message + '\'' +
                ", timestamp='" + timestamp+ '\'' + 
                '}';
    }

    
   

}