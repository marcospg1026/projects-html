import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)
import javax.swing.JOptionPane;

/**
 * Write a description of class Car here.
 * 
 * @marcos.pradales 
 * 4/8/2021
 */
public class Car extends Actor
{
    /**
     * Act - do whatever the Car wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    private boolean crash;
    private int year = 2020;
    private String maker = "Tesla";
    private int speed = 10;
    
    public Car(int year, String maker, int speed){
        this.crash=false;
        this.year=year;
        this.maker=maker;
        this.speed=0;
    }
    
    public String toString() {
        return String.format("A %d %s is going %d mph", this.year, this.maker,this.speed);
    }
    
    public int getYear(){
        return this.year;
    }
    
    public int getSpeed(){
        return this.speed;
    }
    
    public void accelerate(){
        this.speed +=1;
    }
    
    public void brake(){
        this.speed -=1;
    }
    /**
     * Act - do whatever the Car wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    public void act() 
    {
        // handle mouse click events
        if (Greenfoot.mouseClicked(this)) {
            JOptionPane.showMessageDialog(null, this.toString());
        }
        if (this.crash == false){
            // update speed and move the car
            if (Greenfoot.isKeyDown("up")) {
                accelerate();
            }
            if (Greenfoot.isKeyDown("down")) {
                brake();
            }
             if (Greenfoot.isKeyDown("right")) {
                int facing = this.getRotation();
                this.setRotation(facing + 5);
            }
            if (Greenfoot.isKeyDown("left")) {
                int facing = this.getRotation();
                this.setRotation(facing-5);
            }
            move(speed);
            // check if the car has crashed
            Actor other = getOneIntersectingObject(Car.class);
            if (other != null) {
                Greenfoot.playSound("CarCrash.wav");
                crash = true;
            }

        }
    }    
}
