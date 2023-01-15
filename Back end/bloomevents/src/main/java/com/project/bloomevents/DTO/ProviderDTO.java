package com.project.bloomevents.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProviderDTO {
    private int providerId;
    private String businessName;
    private String mobile;
    private String facebook;
    private String instagram;
    private String web;
    private double rating;
    private int userId;
    private int categoryId;
}
