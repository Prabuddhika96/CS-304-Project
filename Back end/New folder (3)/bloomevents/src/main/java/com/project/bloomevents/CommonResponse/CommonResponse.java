package com.project.bloomevents.CommonResponse;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class CommonResponse {
    private boolean isSuccess;
    private String message;
}