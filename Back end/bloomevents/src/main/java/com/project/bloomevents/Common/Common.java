package com.project.bloomevents.Common;

import org.jetbrains.annotations.NotNull;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Common {
    public String encryptPassword(@NotNull String password) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("MD5");
        byte[] pwDigest = md.digest(password.getBytes());
        BigInteger hashed = new BigInteger(1, pwDigest);
        return hashed.toString(16);
    }
}
