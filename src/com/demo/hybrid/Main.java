package com.demo.hybrid;

import com.phonegap.DroidGap;

import android.app.Activity;
import android.os.Bundle;

public class Main extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // set splash screen
        super.setIntegerProperty("splashscreen", R.drawable.splash);
        // get the main page
        super.loadUrl("file:///android_asset/www/index.html");
        
    }
}