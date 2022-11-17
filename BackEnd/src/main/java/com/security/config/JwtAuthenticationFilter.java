package com.security.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.security.jwt.JwtUtil;
import com.security.services.CustomUserDetailsService;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter{

	@Autowired
	private JwtUtil jwtutil;
	@Autowired
	private CustomUserDetailsService customUserDetailsService;
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		System.out.println("hello world");
		String requestTokenHeader=request.getHeader("Authorization");
		String username=null;
		String jwtToken=null;
		
		if(requestTokenHeader!=null && requestTokenHeader.startsWith("Bearer "))
		{
			System.out.println("this is"+requestTokenHeader);
			System.out.println("hello bearer");
			jwtToken=requestTokenHeader.substring(7);
			
			try {
				username=this.jwtutil.extractUsername(jwtToken);
				System.out.println(jwtToken);
			}catch(Exception e) {
				e.printStackTrace();
			}
			
			UserDetails userDetails=this.customUserDetailsService.loadUserByUsername(username);
			
			if(username!=null && SecurityContextHolder.getContext().getAuthentication()==null) {
				System.out.println("security passed");
				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken=new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
				usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
			}
			
			
			
		}
		System.out.println("out of box");
		filterChain.doFilter(request, response);
		
	}

}
