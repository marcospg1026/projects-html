import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Road here.
 * 
 * @marcos.pradales
 * @4/8/2021
 */
public class Road extends World
{

    /**
     * Constructor for objects of class Road.
     * 
     */
    public Road()
    {    
        // Create a new world with 600x400 cells with a cell size of 1x1 pixels.
        super(600, 400, 1); 
        prepare();
    }

    /**
     * Prepare the world for the start of the program.
     * That is: create the initial objects and add them to the world.
     */
    private void prepare()
    {
        Car car = new Car(2020, "Tesla", 10);
        Car dreamCar = new Car(2021, "Bugatti", 30);
        addObject(dreamCar,150,361);
        addObject(car,292,361);
    }
}
