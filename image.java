import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Image here.
 * 
 * @marcos.pradales 
 * @4/8/2021
 */
public class Image extends World
{

    /**
     * Constructor for objects of class Image.
     * 
     */
    public Image()
    {    
        // Create a new world with 610x375 cells with a cell size of 1x1 pixels.
        super(610, 375, 1); 

    }

    /**
     *All pixels will be updated to closest gray posible
     */
    public void grayScale() {
        GreenfootImage img = getBackground();
        for (int y = 0; y < img.getHeight(); y++){
            for (int x = 0; x < img.getWidth(); x++){
                Color pixel = img.getColorAt(x,y);
                int red = pixel.getRed();
                int blue = pixel.getBlue();
                int green = pixel.getGreen();
                int average = (red + blue + green) / 3;
                Color avg = new Color (average, average, average);
                img.setColorAt(x,y,avg);
            }
        }

    }

    /**
     * Sepia transformation will be aplied to all the pixels
     */
    public void sepiaTone() {
        GreenfootImage img = getBackground();
        for (int y = 0; y < img.getHeight(); y++){
            for (int x = 0; x < img.getWidth(); x++){
                Color pixel = img.getColorAt(x,y);
                int red = pixel.getRed();
                int blue = pixel.getBlue();
                int green = pixel.getGreen();
                double r2 = 0.393 * red + 0.769 * green + 0.189 * blue ;
                double g2 = 0.349 * red + 0.686 * green + 0.168 * blue;
                double b2 = 0.272 * red + 0.534 * green + 0.131 * blue;
                if (r2 > 255)  {
                    r2 = 255;
                }
                 if (b2 > 255)  {
                    b2 = 255;
                }
                 if (g2 > 255)  {
                    g2 = 255;
                }
                Color avg = new Color ((int) r2,(int) g2,(int) b2);
                img.setColorAt(x,y,avg);
            }
        }
    }

    /**
     * Replaces the right half of the image with a reflection of the left part
     */
    public void reflectLeft() {
        GreenfootImage img = getBackground();
        for (int y = 0; y < img.getHeight(); y++){
            for (int x = 0; x < img.getWidth() / 2; x++){
                Color pixel = img.getColorAt(x,y);
                int red = pixel.getRed();
                int blue = pixel.getBlue();
                int green = pixel.getGreen();
                Color newcolor = new Color (red, green, blue);
                int reflectx =(img.getWidth() - x) - 1;
                int reflecty =(img.getHeight() - y) - 1;
                img.setColorAt(reflectx,y,newcolor);
            }
        }
    }

    /**
     * Replaces bottom half of the image with the reflection of its top half.
     */
    public void reflectTop() {
        GreenfootImage img = getBackground();
        for (int y = 0; y < img.getHeight() / 2; y++){
            for (int x = 0; x < img.getWidth(); x++){
                Color pixel = img.getColorAt(x,y);
                int red = pixel.getRed();
                int blue = pixel.getBlue();
                int green = pixel.getGreen();
                Color newcolor = new Color (red, green, blue);
                int reflectx =(img.getWidth() - x) - 1;
                int reflecty =(img.getHeight() - y) - 1;
                img.setColorAt(x,reflecty,newcolor);
            }
        }
    }

}
