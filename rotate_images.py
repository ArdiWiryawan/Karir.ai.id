#!/usr/bin/env python3
"""
Script untuk merotasi gambar yang dirotasi agar mudah dibaca
"""

from PIL import Image
import os

def rotate_image(input_path, output_path, angle):
    """Rotasi gambar dengan sudut tertentu"""
    try:
        # Buka gambar
        image = Image.open(input_path)
        
        # Rotasi gambar dengan expand=True untuk mencegah cropping
        rotated = image.rotate(angle, expand=True, fillcolor='white')
        
        # Simpan gambar yang sudah dirotasi
        rotated.save(output_path)
        print(f"Berhasil merotasi {input_path} -> {output_path}")
        
        return True
    except Exception as e:
        print(f"Error merotasi {input_path}: {e}")
        return False

def main():
    # Daftar gambar yang perlu dirotasi
    images = [
        ("attached_assets/image_1757855853293.png", "attached_assets/image_1757855853293_rotated.png"),
        ("attached_assets/image_1757855893648.png", "attached_assets/image_1757855893648_rotated.png")
    ]
    
    # Coba berbagai sudut rotasi untuk mencari yang terbaik
    angles = [90, 180, 270, -90]
    
    for input_path, output_base in images:
        if os.path.exists(input_path):
            print(f"\nMemproses {input_path}...")
            
            # Coba berbagai sudut rotasi
            for angle in angles:
                output_path = output_base.replace('.png', f'_{angle}deg.png')
                rotate_image(input_path, output_path, angle)
            
            # Buat juga versi tanpa rotasi untuk perbandingan
            try:
                image = Image.open(input_path)
                image.save(output_base.replace('.png', '_original.png'))
            except Exception as e:
                print(f"Error menyimpan original: {e}")
        else:
            print(f"File tidak ditemukan: {input_path}")

if __name__ == "__main__":
    main()